import { useState } from 'react';
import type { FilterType } from './Filters.type';
import styles from './FilterSelect.module.css';
import FilterSuggestions from './FilterSuggestions';

interface FilterSelectProps {
  filters: FilterType[];
  onFilterSelect: (f: FilterType) => void;
}

function FilterSelect({
  filters,
  onFilterSelect,
}: FilterSelectProps) {
  const [suggestOn, setSuggestOn] = useState(false);
  const onFocus = () => {
    setSuggestOn(true);
  };
  const onSelect = (f: FilterType) => {
    setSuggestOn(false);
    onFilterSelect(f);
  };

  return (
    <div className={styles.container}>
      <input placeholder="add filter" onFocus={onFocus} />
      {suggestOn && (
        <FilterSuggestions
          filters={filters}
          onSelect={onSelect}
        />
      )}
    </div>
  );
}

export default FilterSelect;
