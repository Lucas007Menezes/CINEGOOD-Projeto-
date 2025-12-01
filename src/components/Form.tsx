
import { useEffect, useState, type FormEvent } from 'react';
import type { CreateCatalogItem, ICatalogItem } from '../types';
import './Form.css';

interface FormProps {
  onSubmit: (data: CreateCatalogItem) => void;
  onCancel: () => void;
  initialData?: ICatalogItem; 
  isLoading?: boolean;
}

export function Form({ onSubmit, onCancel, initialData, isLoading = false }: FormProps) {
  
  const [formData, setFormData] = useState<CreateCatalogItem>({
    title: '',
    type: 'movie',
    status: 'not-watched',
    rating: 0,
    poster: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  
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

  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (validate()) {
      onSubmit(formData);
    }
  };

  
  const updateField = (field: keyof CreateCatalogItem, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    
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
      {}
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

      {}
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

      {}
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

      {}
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

      {}
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