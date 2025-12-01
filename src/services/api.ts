/**
 * Service de API usando Fetch API nativa
 * 
 * CONCEITO IMPORTANTE:
 * - Fetch API é nativa do navegador (não precisa instalar)
 * - Usamos async/await para código mais limpo
 * - Tratamento de erros centralizado
 */

import { ICatalogItem, CreateCatalogItem, UpdateCatalogItem } from '../types';

const BASE_URL = 'http://localhost:3001';
const ENDPOINT = '/catalog';

/**
 * Helper para verificar resposta HTTP
 */
async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
  }
  return response.json();
}

/**
 * CRUD Operations
 */
export const api = {
  /**
   * GET /catalog - Listar todos os itens
   */
  getAll: async (): Promise<ICatalogItem[]> => {
    const response = await fetch(`${BASE_URL}${ENDPOINT}`);
    return handleResponse<ICatalogItem[]>(response);
  },

  /**
   * GET /catalog/:id - Buscar item por ID
   */
  getById: async (id: string): Promise<ICatalogItem> => {
    const response = await fetch(`${BASE_URL}${ENDPOINT}/${id}`);
    return handleResponse<ICatalogItem>(response);
  },

  /**
   * POST /catalog - Criar novo item
   */
  create: async (item: CreateCatalogItem): Promise<ICatalogItem> => {
    const response = await fetch(`${BASE_URL}${ENDPOINT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    });
    return handleResponse<ICatalogItem>(response);
  },

  /**
   * PUT /catalog/:id - Atualizar item completo
   */
  update: async (id: string, item: ICatalogItem): Promise<ICatalogItem> => {
    const response = await fetch(`${BASE_URL}${ENDPOINT}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    });
    return handleResponse<ICatalogItem>(response);
  },

  /**
   * PATCH /catalog/:id - Atualizar item parcialmente
   * IMPORTANTE: Use PATCH quando atualizar apenas alguns campos
   */
  patch: async (id: string, data: UpdateCatalogItem): Promise<ICatalogItem> => {
    const response = await fetch(`${BASE_URL}${ENDPOINT}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return handleResponse<ICatalogItem>(response);
  },

  /**
   * DELETE /catalog/:id - Remover item
   */
  delete: async (id: string): Promise<void> => {
    const response = await fetch(`${BASE_URL}${ENDPOINT}/${id}`, {
      method: 'DELETE',
    });
    
    if (!response.ok) {
      throw new Error(`Erro ao deletar: ${response.statusText}`);
    }
  },
};