import Tariff from "./Tariff";
import styles from './TariffSelector.module.css';

const data = [
    {color: 'blue', speed: '10', price: '300'},
    {color: 'green', speed: '50', price: '450'},
    {color: 'red', speed: '100', price: '550'},
    {color: 'dark', speed: '200', price: '1000'},
];

const TariffSelector = () => <>
    <section className={styles.tariffSelector}>
        {data.map((t, i) => <div key={i} style={i === 2 ? {transform: 'scale(1.05, 1.05)'} : {}}>
            <Tariff {...t}/>
        </div>)}
    </section>
</>

export default TariffSelector;
