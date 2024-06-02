import { useState } from 'react';
import type { FilterType } from './Filters.type';
import styles from './FilterSelect.module.css';
import FilterSuggestions from './FilterSuggestions';

interface FilterSelectProps {
  filters: FilterType[];
  onFilterSelect: (f: FilterType) => void;
}

function FilterSelect({
  filters: rawFilters,
  onFilterSelect,
}: FilterSelectProps) {
  const [value, setValue] = useState('')
  const onChange = (e: any) => {
    setValue(e.target.value)
  }

  const [suggestOn, setSuggestOn] = useState(false);
  const onFocus = () => {
    setSuggestOn(true);
  };
  const onSelect = (f: FilterType) => {
    setSuggestOn(false);
    onFilterSelect(f);
    setValue('')
  };

  const filters = rawFilters.filter(f => f.id.includes(value))
 
  return (
    <div className={styles.container}>
      <input placeholder="add filter" onFocus={onFocus} value={value} onChange={onChange} />
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
