import styles from './ProductInCart.module.css';
import product from '../images/cart.png';
import truck from '../images/truck.png';
import verify from '../images/verify.png';
import trash from '../images/trash btn.png';
import add from '../images/add.png';
import minus from '../images/minus.png';

export function ProductInCart(){
    return(
        <div className={styles.content}>
            <img src={product} alt="" className={styles.photo}/>
            <div className={styles.data}>
                <div className={styles.name}>MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch</div>
                <div className={styles.option}>
                    <img src={truck} alt="" />
                    <p className={styles.optionText}>Free Delivery</p>
                </div>
                <div className={styles.option}>
                    <img src={verify} alt="" />
                    <p className={styles.optionText}>Guaranteed</p>
                </div>
                <div className={styles.flexContainer}>
                    <div className={styles.price}>$1000</div>
                    <div className={styles.panel}>
                        <img src={trash} alt="" className={styles.trashBtn}/>
                        <div className={styles.numberChanger}>
                            <img src={minus} alt='' className={styles.btn}/>
                            <div className={styles.number}>1</div>
                            <img src={add} alt='' className={styles.btn}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}