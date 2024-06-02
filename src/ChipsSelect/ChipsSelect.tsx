import Chip from './Chip';
import Input from './Input';
import type { ItemType } from './ChipsSelect.type';
import styles from './ChipsSelect.module.css';

interface ChipsSelectProps {
  items: ItemType[];
}

function ChipsSelect({ items }: ChipsSelectProps) {
  return (
    <div className={styles.container}>
      <div className={styles.label}>Filter:</div>
      {items.map(item => (
        <Chip key={item.action} item={item} />
      ))}
      <Input />
    </div>
  );
}

export default ChipsSelect;
