import './global.css';
import styles from './App.module.css';
import { Header } from './components/Header';
import { Task } from './components/Task';


function App() {

  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <Task />
      </main>
    </>
  )
}

export default App
