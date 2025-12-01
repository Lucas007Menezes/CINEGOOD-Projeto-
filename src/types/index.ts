// Tipos de Dados da Aplicação

export type ItemType = 'movie' | 'series';
export type ItemStatus = 'watched' | 'not-watched';

/**
 * Interface principal do catálogo
 * Representa um filme ou série no sistema
 */
export interface ICatalogItem {
  id: string;
  title: string;
  type: ItemType;
  status: ItemStatus;
  rating: number; // 0 a 5
  poster?: string; // URL opcional
}

/**
 * Tipo usado para criação (sem ID)
 * O ID será gerado pelo JSON Server
 */
export type CreateCatalogItem = Omit<ICatalogItem, 'id'>;

/**
 * Tipo para atualizações parciais
 */
export type UpdateCatalogItem = Partial<ICatalogItem>;