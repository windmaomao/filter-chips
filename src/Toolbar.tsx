import styles from './Toolbar.module.css';
import ChipsSelect from './ChipsSelect';

function Toolbar() {
  return (
    <div className={styles.toolbar}>
      <ChipsSelect />
    </div>
  );
}

export default Toolbar;
