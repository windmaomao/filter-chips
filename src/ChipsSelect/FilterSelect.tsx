import { useState, useRef } from 'react';
import type { FilterType } from './Filters.type';
import FilterSuggestions from './FilterSuggestions';
import useClickoutside from './useClickoutside';
import styles from './FilterSelect.module.css';

interface FilterSelectProps {
  filters: FilterType[];
  onFilterSelect: (f: FilterType) => void;
}

function FilterSelect({
  filters: rawFilters,
  onFilterSelect,
}: FilterSelectProps) {
  const [value, setValue] = useState('');
  const onChange = (e: any) => {
    setValue(e.target.value);
  };

  const [suggestOn, setSuggestOn] = useState(false);
  const onFocus = () => {
    setSuggestOn(true);
  };
  const onSelect = (f: FilterType) => {
    // setSuggestOn(false);
    onFilterSelect(f);
    setValue('');
  };

  const filters = rawFilters.filter(f =>
    f.id.includes(value),
  );

  const ref = useRef<HTMLDivElement>(null);
  useClickoutside(ref, () => {
    setSuggestOn(false);
  });

  return (
    <div ref={ref} className={styles.container}>
      <input
        placeholder="add filter"
        onFocus={onFocus}
        value={value}
        onChange={onChange}
      />
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
