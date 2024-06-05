import { useEffect, useRef } from 'react';
import type { FilterType } from './Filters.type';
import useArrowFocus from './useArrowFocus';
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
  const onEnter = (i: number) => {
    onSelect(filters[i]);
  };

  const ref = useRef<HTMLDivElement>(null);
  const [focusIndex] = useArrowFocus(
    filters.length,
    onEnter,
  );
  useEffect(() => {
    if (ref.current) {
      ref.current.children[focusIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
    }
  }, [focusIndex]);

  return (
    <div ref={ref} className={styles.popover}>
      {filters.map((f, i) => (
        <div
          key={f.id}
          className={`${styles.item} ${
            focusIndex === i ? styles.on : ''
          }`}
          onClick={onClick(f)}
          tabIndex={0}
        >
          {f.id}
        </div>
      ))}
    </div>
  );
}

export default FilterSuggestions;
