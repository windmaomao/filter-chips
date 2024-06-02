import type { FilterType } from './Filters.type';

export interface ItemType {
  id: string;
  filter: FilterType;
  caption?: string;
  op?: string;
  value?: string;
}
