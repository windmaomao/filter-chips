import type { ItemType } from './Items.type';
import styles from './ChipEditor.module.css';

interface ChipEditorProps {
  item: ItemType;
  onEdit: () => void;
  onRemove: () => void;
}

export default function ChipEditor({
  item,
  onEdit,
  onRemove,
}: ChipEditorProps) {
  const {
    value,
    op,
    filter: { ops },
  } = item;

  const onChange = (name: string) => (e: any) => {
    Object.assign(item, { [name]: e.target.value });
    onEdit();
  };

  return (
    <div className={styles.editor}>
      <div className={styles.delete} onClick={onRemove}>
        close
      </div>
      <div>
        <label>Operator</label>
        <div>
          <select
            name="ops"
            value={op}
            onChange={onChange('op')}
          >
            {ops.map(o => (
              <option value={o} key={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label>Value</label>
        <input value={value} onChange={onChange('value')} />
      </div>
    </div>
  );
}
