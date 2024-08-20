import styles from './Cart.module.css';
import { Link } from 'react-router-dom';
import cart from '../images/cart-icon.png';
import { ProductInCart } from "./ProductInCart";

export function Cart(){
    return(
        <div className={styles.content}>
            <div className={styles.number}>3 items</div>
            <div className={styles.cardContainer}>
                <ProductInCart/>
                <ProductInCart/>
                <ProductInCart/>
                <ProductInCart/>
                <ProductInCart/>
                <ProductInCart/>
            </div>
            <div className={styles.flexContainer}>
                <div className={styles.total}>
                    <div className={styles.title}>Grand Total</div>
                    <div className={styles.price}>$3000</div>
                </div>
                <Link to='/cart' className={styles.btn}>
                    <div className={styles.btnContainer}>
                        <p className={styles.btnText}>Proceed to Cart</p>
                        <img src={cart} alt="" />
                    </div>
                </Link>
            </div>
        </div>
    );
}