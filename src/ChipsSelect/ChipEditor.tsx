import type { ItemType } from './Items.type';
import styles from './ChipEditor.module.css';

interface ChipEditorProps {
  item: ItemType;
  onEdit: () => void;
}

export default function ChipEditor({
  item,
  onEdit,
}: ChipEditorProps) {
  const { value } = item;

  const onChange = (e: any) => {
    item.value = e.target.value;
    onEdit();
  };

  return (
    <div className={styles.editor}>
      <p>
        <label>Operator</label>
        <input />
      </p>
      <p>
        <label>Value</label>
        <input value={value} onChange={onChange} />
      </p>
    </div>
  );
}
