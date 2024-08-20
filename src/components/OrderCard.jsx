import styles from './OrderCard.module.css';
import product from '../images/image.png';

export function OrderCard(){
    return(
        <div className={styles.content}>
            <img src={product} alt="" className={styles.photo}/>
            <div className={styles.data}>
                <div className={styles.name}>MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch</div>
                <div className={styles.number}>x1</div>
                <div className={styles.price}>$1000</div>
            </div>
        </div>
    );
}