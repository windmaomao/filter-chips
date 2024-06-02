import styles from './App.module.css';
import Toolbar from './Toolbar';

function App() {
  return (
    <div className={styles.app}>
      <h1>Filters Demo</h1>
      <Toolbar />
      <p>A multi-chips select widget</p>
    </div>
  );
}

export default App;
