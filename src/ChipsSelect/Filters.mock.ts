import { FilterType } from './Filters.type';

const ops = ['=', '>', '<'];
const filters: FilterType[] = [
  { id: 'name', ops },
  { id: 'status', ops },
  { id: 'date', ops },
  { id: 'min', ops },
  { id: 'max', ops },
  { id: 'space', ops },
  { id: 'language', ops },
  { id: 'color', ops },
  { id: 'first', ops },
  { id: 'last', ops },
];

export default filters;
