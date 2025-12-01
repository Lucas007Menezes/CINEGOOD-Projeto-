/**
 * Componente Form
 * 
 * CONCEITOS APLICADOS:
 * - Controlled Components (formulário controlado)
 * - useState para gerenciar estado do formulário
 * - Validação de dados
 * - Eventos de formulário tipados
 */

import { useState, FormEvent, useEffect } from 'react';
import { ICatalogItem, CreateCatalogItem } from '../types';
import './Form.css';

interface FormProps {
  onSubmit: (data: CreateCatalogItem) => void;
  onCancel: () => void;
  initialData?: ICatalogItem; // Para edição
  isLoading?: boolean;
}

export function Form({ onSubmit, onCancel, initialData, isLoading = false }: FormProps) {
  // Estado do formulário
  const [formData, setFormData] = useState<CreateCatalogItem>({
    title: '',
    type: 'movie',
    status: 'not-watched',
    rating: 0,
    poster: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  // Preencher formulário se estiver editando
  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title,
        type: initialData.type,
        status: initialData.status,
        rating: initialData.rating,
        poster: initialData.poster || '',
      });
    }
  }, [initialData]);

  // Validação
  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.title.trim()) {
      newErrors.title = 'O título é obrigatório';
    }

    if (formData.rating < 0 || formData.rating > 5) {
      newErrors.rating = 'A nota deve estar entre 0 e 5';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (validate()) {
      onSubmit(formData);
    }
  };

  // Update field
  const updateField = (field: keyof CreateCatalogItem, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Limpar erro do campo
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {/* Título */}
      <div className="form-group">
        <label htmlFor="title">Título *</label>
        <input
          id="title"
          type="text"
          value={formData.title}
          onChange={(e) => updateField('title', e.target.value)}
          placeholder="Ex: Breaking Bad"
          className={errors.title ? 'error' : ''}
          disabled={isLoading}
        />
        {errors.title && <span className="error-message">{errors.title}</span>}
      </div>

      {/* Tipo e Status */}
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="type">Tipo *</label>
          <select
            id="type"
            value={formData.type}
            onChange={(e) => updateField('type', e.target.value)}
            disabled={isLoading}
          >
            <option value="movie">Filme</option>
            <option value="series">Série</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="status">Status *</label>
          <select
            id="status"
            value={formData.status}
            onChange={(e) => updateField('status', e.target.value)}
            disabled={isLoading}
          >
            <option value="not-watched">Não Assistido</option>
            <option value="watched">Assistido</option>
          </select>
        </div>
      </div>

      {/* Avaliação */}
      <div className="form-group">
        <label htmlFor="rating">Avaliação (0-5)</label>
        <input
          id="rating"
          type="number"
          min="0"
          max="5"
          value={formData.rating}
          onChange={(e) => updateField('rating', Number(e.target.value))}
          className={errors.rating ? 'error' : ''}
          disabled={isLoading}
        />
        {errors.rating && <span className="error-message">{errors.rating}</span>}
      </div>

      {/* Poster */}
      <div className="form-group">
        <label htmlFor="poster">URL do Poster (opcional)</label>
        <input
          id="poster"
          type="url"
          value={formData.poster}
          onChange={(e) => updateField('poster', e.target.value)}
          placeholder="https://exemplo.com/poster.jpg"
          disabled={isLoading}
        />
      </div>

      {/* Botões */}
      <div className="form-actions">
        <button 
          type="button" 
          className="btn-secondary"
          onClick={onCancel}
          disabled={isLoading}
        >
          Cancelar
        </button>
        <button 
          type="submit" 
          className="btn-primary"
          disabled={isLoading}
        >
          {isLoading ? 'Salvando...' : (initialData ? 'Atualizar' : 'Adicionar')}
        </button>
      </div>
    </form>
  );
}