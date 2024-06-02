import styles from './App.module.css';
import design from './design.jpg';

function App() {
  return (
    <div className={styles.app}>
      <h1>Filters Demo</h1>
      <img
        className={styles.pic}
        src={design}
        alt="Design"
        width="100%"
      />
      <div>blahblahbalh</div>
    </div>
  );
}

export default App;
