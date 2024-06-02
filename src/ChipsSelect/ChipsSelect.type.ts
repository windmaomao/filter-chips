import type { FilterType } from './Filters.type';

export interface ItemType {
  action: string;
  filter?: FilterType;
}
