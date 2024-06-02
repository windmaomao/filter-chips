import styles from './ChipsSelect.module.css';

function ChipsSelect() {
  return (
    <div className={styles.container}>
      <div className="input">
        <input placeholder="add filter" />
      </div>
    </div>
  );
}

export default ChipsSelect;
