
export type ItemType = 'movie' | 'series';
export type ItemStatus = 'watched' | 'not-watched';


export interface ICatalogItem {
  id: string;
  title: string;
  type: ItemType;
  status: ItemStatus;
  rating: number; // 0 a 5
  poster?: string; // URL opcional
}


export type CreateCatalogItem = Omit<ICatalogItem, 'id'>;


export type UpdateCatalogItem = Partial<ICatalogItem>;