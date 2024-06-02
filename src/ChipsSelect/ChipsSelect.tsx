import Chip from './Chip';
import FilterSelect from './FilterSelect';
import type { ItemType } from './ChipsSelect.type';
import type { FilterType } from './Filters.type';
import styles from './ChipsSelect.module.css';

interface ChipsSelectProps {
  filters: FilterType[];
  items: ItemType[];
}

function ChipsSelect({ items, filters }: ChipsSelectProps) {
  const onFilterSelect = (f: FilterType) => {};

  return (
    <div className={styles.container}>
      <div className={styles.label}>Filter:</div>
      {items.map(item => (
        <Chip key={item.action} item={item} />
      ))}
      <FilterSelect
        filters={filters}
        onSelect={onFilterSelect}
      />
    </div>
  );
}

export default ChipsSelect;
