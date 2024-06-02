import { useState } from 'react';
import Chip from './Chip';
import FilterSelect from './FilterSelect';
import type { ItemType } from './ChipsSelect.type';
import type { FilterType } from './Filters.type';
import styles from './ChipsSelect.module.css';

const mockItems: ItemType[] = [{ action: 'others' }];

interface ChipsSelectProps {
  filters: FilterType[];
}

function ChipsSelect({ filters }: ChipsSelectProps) {
  const [items, setItems] = useState(mockItems);
  const onFilterSelect = (f: FilterType) => {
    setItems([...items, { action: f.id }]);
  };
  const onChipRemove = (item: ItemType) => () => {
    setItems(items.filter(i => i !== item));
  };

  return (
    <div className={styles.container}>
      <div className={styles.label}>Filter:</div>
      {items.map(item => (
        <Chip
          key={item.action}
          item={item}
          onRemove={onChipRemove(item)}
        />
      ))}
      <FilterSelect
        filters={filters}
        onFilterSelect={onFilterSelect}
      />
    </div>
  );
}

export default ChipsSelect;
