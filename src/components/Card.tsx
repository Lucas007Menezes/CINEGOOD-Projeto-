/**
 * Componente Card
 * 
 * CONCEITOS APLICADOS:
 * - Desestruturação de props
 * - Renderização condicional
 * - Event handlers tipados
 * - Componente controlado
 */

import { ICatalogItem } from '../types';
import './Card.css';

interface CardProps {
  item: ICatalogItem;
  onEdit: (item: ICatalogItem) => void;
  onDelete: (id: string) => void;
}

export function Card({ item, onEdit, onDelete }: CardProps) {
  // Handler para confirmação de exclusão
  const handleDelete = () => {
    const confirmed = window.confirm(
      `Deseja realmente excluir "${item.title}"?`
    );
    
    if (confirmed) {
      onDelete(item.id);
    }
  };

  // Placeholder caso não tenha poster
  const posterUrl = item.poster || 'https://via.placeholder.com/300x450/1a1a1a/666?text=Sem+Poster';

  // Renderizar estrelas de avaliação
  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <span 
        key={index} 
        className={index < item.rating ? 'star filled' : 'star'}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="card">
      {/* Poster */}
      <div className="card-poster">
        <img 
          src={posterUrl} 
          alt={item.title}
          onError={(e) => {
            // Fallback se a imagem falhar ao carregar
            (e.target as HTMLImageElement).src = 
              'https://via.placeholder.com/300x450/1a1a1a/666?text=Erro';
          }}
        />
        
        {/* Overlay com ações */}
        <div className="card-overlay">
          <button 
            className="btn-icon edit" 
            onClick={() => onEdit(item)}
            title="Editar"
          >
            ✏️
          </button>
          <button 
            className="btn-icon delete" 
            onClick={handleDelete}
            title="Excluir"
          >
            🗑️
          </button>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="card-content">
        {/* Badges */}
        <div className="card-badges">
          <span className={`badge ${item.type}`}>
            {item.type === 'movie' ? '🎬 Filme' : '📺 Série'}
          </span>
          <span className={`badge ${item.status}`}>
            {item.status === 'watched' ? '✓ Assistido' : '⏱ Pendente'}
          </span>
        </div>

        {/* Título */}
        <h3 className="card-title">{item.title}</h3>

        {/* Avaliação */}
        <div className="card-rating">
          {renderStars()}
        </div>
      </div>
    </div>
  );
}