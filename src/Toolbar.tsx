import styles from './Toolbar.module.css';
import ChipsSelect from './ChipsSelect';
import filters from './ChipsSelect/Filters.mock';

function Toolbar() {
  return (
    <div className={styles.toolbar}>
      <ChipsSelect filters={filters} />
    </div>
  );
}

export default Toolbar;
