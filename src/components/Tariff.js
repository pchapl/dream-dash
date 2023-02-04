import styles from './Tariff.module.css';

const Tariff = ({color, speed, price}) => <>
    <article className={styles.tariff}>
        <div className={`${styles.tariffName} ${styles[color]}`}>Безлимитный {price}</div>
        <div className={`${styles.tariffPrice} ${styles[color]}`}>
            <p>руб</p>
            <p>{price}</p>
            <p>/мес</p>
        </div>
        <div className={styles.tariffSpeed}>До {speed} Мбит/сек</div>
        <div className={styles.tariffDetails}>Объём включенного трафика не ограничен</div>
    </article>
</>

export default Tariff;
