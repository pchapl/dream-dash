import './App.css';
import MyPie from "./components/MyPie";
import MyRandomizedPie from "./components/MyRandomizedPie";

const App = () => (
    <div className="App">
        <section>
            <MyPie/>
        </section>
        <section>
            <MyRandomizedPie/>
        </section>
    </div>
);

export default App;
