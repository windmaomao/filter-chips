import { FilterType } from './Filters.type';

const numOps = ['=', '>', '<'];
const textOps = ['=', 'starts'];
const filters: FilterType[] = [
  { id: 'name', ops: textOps },
  { id: 'status', ops: textOps },
  { id: 'date', ops: numOps },
  { id: 'min', ops: numOps },
  { id: 'max', ops: numOps },
  { id: 'space', ops: textOps },
  { id: 'language', ops: textOps },
  { id: 'color', ops: textOps },
  { id: 'first', ops: textOps },
  { id: 'last', ops: textOps },
];

export default filters;
