import type { ItemType } from './ChipsSelect.type';
import styles from './Chip.module.css';

interface ChipProps {
  item: ItemType;
  onRemove: () => void;
}

function Chip({ item, onRemove }: ChipProps) {
  return (
    <div className={styles.chip}>
      <button onClick={onRemove}>{item.action}</button>
    </div>
  );
}

export default Chip;
