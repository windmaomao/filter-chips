import { useState } from 'react';
import Chip from './Chip';
import FilterSelect from './FilterSelect';
import type { ItemType } from './Items.type';
import type { FilterType } from './Filters.type';
import styles from './ChipsSelect.module.css';

const mockItems: ItemType[] = [];
let counter = 111;
const newItem = (filter: FilterType) => ({
  id: `${filter.id}-${counter++}`,
  caption: `${filter.id}`,
  filter,
  op: filter.ops[0],
  value: '',
});

interface ChipsSelectProps {
  filters: FilterType[];
}

function ChipsSelect({ filters }: ChipsSelectProps) {
  const [items, setItems] = useState(mockItems);
  const onFilterSelect = (f: FilterType) => {
    setItems([...items, newItem(f)]);
  };
  const onChipRemove = (item: ItemType) => () => {
    setItems(items.filter(i => i !== item));
  };
  const onChipChange = (item: ItemType) => () => {
    setItems([...items]);
  };

  const info = JSON.stringify(items);
  // console.log(info);

  return (
    <div className={styles.container}>
      <div className={styles.label}>Filter:</div>
      {items.map(item => (
        <Chip
          key={item.id}
          item={item}
          onRemove={onChipRemove(item)}
          onChange={onChipChange(item)}
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
