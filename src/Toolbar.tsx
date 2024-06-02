import styles from './Toolbar.module.css';
import ChipsSelect from './ChipsSelect';
import filters from './ChipsSelect/Filters.mock';

const items = [{ action: 'Others' }];

function Toolbar() {
  return (
    <div className={styles.toolbar}>
      <ChipsSelect items={items} filters={filters} />
    </div>
  );
}

export default Toolbar;
