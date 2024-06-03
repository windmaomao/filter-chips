import type { FilterType } from './Filters.type';
import styles from './FilterSuggestions.module.css';

interface FilterSuggestionsProps {
  filters: FilterType[];
  onSelect: (f: FilterType) => void;
}

function FilterSuggestions({
  filters,
  onSelect,
}: FilterSuggestionsProps) {
  const onClick = (f: FilterType) => () => {
    onSelect(f);
  };
  const onKeyDown = (f: FilterType) => (e: any) => {
    if (e.key === 'Enter') {
      onSelect(f);
    }
  };

  return (
    <div className={styles.popover}>
      {filters.map(f => (
        <div
          key={f.id}
          className={styles.item}
          onClick={onClick(f)}
          tabIndex={0}
          onKeyDown={onKeyDown(f)}
        >
          {f.id}
        </div>
      ))}
    </div>
  );
}

export default FilterSuggestions;
