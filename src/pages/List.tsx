/**
 * Página List
 * 
 * CONCEITOS APLICADOS:
 * - useEffect para carregar dados na montagem
 * - useState para gerenciar múltiplos estados
 * - Operações CRUD completas
 * - Loading states
 * - Error handling
 * - Modal pattern
 */

import { useEffect, useState } from 'react';
import { Card } from '../components/Card';
import { Form } from '../components/Form';
import { api } from '../services/api';
import type { CreateCatalogItem, ICatalogItem } from '../types';
import './List.css';

export function List() {
  // Estados
  const [items, setItems] = useState<ICatalogItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<ICatalogItem | undefined>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Carregar dados ao montar componente
  useEffect(() => {
    loadItems();
  }, []);

  /**
   * READ - Buscar todos os itens
   */
  const loadItems = async () => {
    try {
      setIsLoading(true);
      const data = await api.getAll();
      setItems(data);
    } catch (error) {
      console.error('Erro ao carregar itens:', error);
      alert('Erro ao carregar catálogo. Verifique se o JSON Server está rodando.');
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * CREATE - Adicionar novo item
   */
  const handleCreate = async (data: CreateCatalogItem) => {
    try {
      setIsSubmitting(true);
      const newItem = await api.create(data);
      setItems(prev => [...prev, newItem]);
      setIsModalOpen(false);
      alert('Item adicionado com sucesso!');
    } catch (error) {
      console.error('Erro ao criar item:', error);
      alert('Erro ao adicionar item. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  /**
   * UPDATE - Atualizar item existente
   */
  const handleUpdate = async (data: CreateCatalogItem) => {
    if (!editingItem) return;

    try {
      setIsSubmitting(true);
      const updatedItem = await api.update(editingItem.id, {
        ...data,
        id: editingItem.id
      });
      
      setItems(prev => 
        prev.map(item => item.id === updatedItem.id ? updatedItem : item)
      );
      
      setIsModalOpen(false);
      setEditingItem(undefined);
      alert('Item atualizado com sucesso!');
    } catch (error) {
      console.error('Erro ao atualizar item:', error);
      alert('Erro ao atualizar item. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  /**
   * DELETE - Remover item
   */
  const handleDelete = async (id: string) => {
    try {
      await api.delete(id);
      setItems(prev => prev.filter(item => item.id !== id));
      alert('Item removido com sucesso!');
    } catch (error) {
      console.error('Erro ao deletar item:', error);
      alert('Erro ao remover item. Tente novamente.');
    }
  };

  // Abrir modal para adicionar
  const openAddModal = () => {
    setEditingItem(undefined);
    setIsModalOpen(true);
  };

  // Abrir modal para editar
  const openEditModal = (item: ICatalogItem) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  // Fechar modal
  const closeModal = () => {
    setIsModalOpen(false);
    setEditingItem(undefined);
  };

  return (
    <div className="list-page">
      <div className="list-container">
        {/* Header da listagem */}
        <div className="list-header">
          <h2>Meu Catálogo</h2>
          <button className="btn-add-list" onClick={openAddModal}>
            + Adicionar Título
          </button>
        </div>

        {/* Loading */}
        {isLoading && (
          <div className="loading">
            <div className="spinner"></div>
            <p>Carregando catálogo...</p>
          </div>
        )}

        {/* Empty State */}
        {!isLoading && items.length === 0 && (
          <div className="empty-state">
            <h3>Nenhum item no catálogo</h3>
            <p>Comece adicionando seus filmes e séries favoritos!</p>
            <button className="btn-add-large" onClick={openAddModal}>
              + Adicionar Primeiro Título
            </button>
          </div>
        )}

        {/* Grid de Cards */}
        {!isLoading && items.length > 0 && (
          <div className="grid">
            {items.map((item) => (
              <Card
                key={item.id}
                item={item}
                onEdit={openEditModal}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{editingItem ? 'Editar Título' : 'Adicionar Novo Título'}</h2>
              <button className="btn-close" onClick={closeModal}>
                ✕
              </button>
            </div>
            <div className="modal-content">
              <Form
                onSubmit={editingItem ? handleUpdate : handleCreate}
                onCancel={closeModal}
                initialData={editingItem}
                isLoading={isSubmitting}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}