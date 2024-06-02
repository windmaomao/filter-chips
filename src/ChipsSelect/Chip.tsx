import { useState, useRef } from 'react';
import useClickoutside from './useClickoutside';
import type { ItemType } from './Items.type';
import styles from './Chip.module.css';

interface ChipProps {
  item: ItemType;
  onRemove: () => void;
  onChange: (item: ItemType) => void;
}

function Chip({ item, onRemove, onChange }: ChipProps) {
  const [edit, setEdit] = useState(false);
  const onToggle = () => {
    setEdit(!edit);
  };

  const ref = useRef<HTMLDivElement>(null);
  useClickoutside(ref, () => {
    setEdit(false);
  });

  return (
    <div ref={ref} className={styles.chip}>
      <button onClick={onToggle}>{item.caption}</button>
      {edit && (
        <div className={styles.edit}>
          <p>
            <label>Operator</label>
            <input />
          </p>
          <p>
            <label>Value</label>
            <input />
          </p>
        </div>
      )}
    </div>
  );
}

export default Chip;
