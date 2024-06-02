import styles from './Input.module.css';

function Input() {
  return (
    <div className={styles.container}>
      <input placeholder="add filter" />
    </div>
  );
}

export default Input;
