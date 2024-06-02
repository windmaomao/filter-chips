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
      <button onClick={onToggle}>
        {item.caption}
        {item.op}
        {item.value}
      </button>
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
