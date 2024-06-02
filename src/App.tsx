import styles from './App.module.css';
import Toolbar from './Toolbar';

function App() {
  return (
    <div className={styles.app}>
      <h1>Filters Demo</h1>
      <Toolbar />
    </div>
  );
}

export default App;
