import styles from './ProductCard.module.css';
import image from '../images/image.png';
import star from '../images/Star.png';
import cart from '../images/shopping-cart.png';
import { Link } from 'react-router-dom';

export function ProductCard(){
    return(
        <Link to='/' className={styles.card}>
            <img src={image} alt="" className={styles.photo}/>
            <div className={styles.divider}></div>
            <p className={styles.name}>The name of random notebook pro max</p>
            <div className={styles.flexContainer}>
                <button className={styles.button}>
                    <img src={cart} alt="" />
                    <p className={styles.buttonText}>Add to cart</p>
                </button>
                <p className={styles.price}>$1000</p>
                <div className={styles.rating}>
                    <img src={star} alt="" />
                    <p className={styles.points}>4.9</p>
                </div>
            </div>
        </Link>
    );
}