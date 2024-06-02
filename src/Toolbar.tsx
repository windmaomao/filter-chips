import styles from './Toolbar.module.css';
import ChipsSelect from './ChipsSelect';

const items = [{ action: 'Others' }];

function Toolbar() {
  return (
    <div className={styles.toolbar}>
      <ChipsSelect items={items} />
    </div>
  );
}

export default Toolbar;
