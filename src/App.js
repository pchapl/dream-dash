import styles from './App.module.css';
import TariffSelector from "./components/TariffSelector";

const App = () => (
    <div className={styles.App}>
        <header>
            <h1>App</h1>
        </header>
        <section>
            <TariffSelector/>
        </section>
    </div>
);

export default App;
