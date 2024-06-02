import type { ItemType } from './ChipsSelect.type';
import styles from './Chip.module.css';

interface ChipProps {
  item: ItemType;
}

function Chip({ item }: ChipProps) {
  return (
    <div className={styles.chip}>
      <button>{item.action}</button>
    </div>
  );
}

export default Chip;
