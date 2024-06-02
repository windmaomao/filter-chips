import type { FilterType } from './Filters.type';

export interface ItemType {
  id: string;
  caption: string;
  filter?: FilterType;
}
