import type { ItemType } from './ChipsSelect.type';
import styles from './Chip.module.css';

interface ChipProps {
  item: ItemType;
  onRemove: () => void;
}

function Chip({ item, onRemove }: ChipProps) {
  return (
    <div className={styles.chip}>
      <button onClick={onRemove}>{item.caption}</button>
    </div>
  );
}

export default Chip;
