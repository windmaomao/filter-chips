import { useState, useRef } from 'react';
import useClickoutside from './useClickoutside';
import ChipEditor from './ChipEditor';
import type { ItemType } from './Items.type';
import styles from './Chip.module.css';

interface ChipProps {
  item: ItemType;
  onRemove: () => void;
  onChange: (item: ItemType) => void;
}

function Chip({ item, onRemove, onChange }: ChipProps) {
  const [editOn, setEditOn] = useState(false);
  const onToggle = () => {
    setEditOn(!editOn);
  };

  const ref = useRef<HTMLDivElement>(null);
  useClickoutside(ref, () => {
    setEditOn(false);
  });

  const onEdit = () => {
    onChange(item);
  };

  return (
    <div ref={ref} className={styles.chip}>
      <div className={styles.label} onClick={onToggle}>
        <span className={styles.caption}>
          {item.caption}
        </span>
        <span className={styles.op}>{item.op}</span>
        <span className={styles.value}>{item.value}</span>
        <span className={styles.delete}>x</span>
      </div>
      {editOn && (
        <ChipEditor
          item={item}
          onEdit={onEdit}
          onRemove={onRemove}
        />
      )}
    </div>
  );
}

export default Chip;
