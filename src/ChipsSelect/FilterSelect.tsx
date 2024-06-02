import type { FilterType } from './Filters.type';
import styles from './FilterSelect.module.css';

interface FilterSelectProps {
  filters: FilterType[];
  onSelect?: (f: FilterType) => void;
}

function FilterSelect({
  filters,
  onSelect,
}: FilterSelectProps) {
  return (
    <div className={styles.container}>
      <input placeholder="add filter" />
    </div>
  );
}

export default FilterSelect;
