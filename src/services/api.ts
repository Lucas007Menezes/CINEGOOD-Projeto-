

import type { ICatalogItem, CreateCatalogItem, UpdateCatalogItem } from '../types';

const BASE_URL = 'http://localhost:3001';
const ENDPOINT = '/catalog';


async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
  }
  return response.json();
}


export const api = {
  
  getAll: async (): Promise<ICatalogItem[]> => {
    const response = await fetch(`${BASE_URL}${ENDPOINT}`);
    return handleResponse<ICatalogItem[]>(response);
  },

 
  getById: async (id: string): Promise<ICatalogItem> => {
    const response = await fetch(`${BASE_URL}${ENDPOINT}/${id}`);
    return handleResponse<ICatalogItem>(response);
  },

 
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

  
  delete: async (id: string): Promise<void> => {
    const response = await fetch(`${BASE_URL}${ENDPOINT}/${id}`, {
      method: 'DELETE',
    });
    
    if (!response.ok) {
      throw new Error(`Erro ao deletar: ${response.statusText}`);
    }
  },
};