import styles from './CartPage.module.css';
import {Header} from './Header';
import {Footer} from './Footer';
import { ProductInCart } from './ProductInCart';
import { useState } from 'react';
import { OrderCard } from './OrderCard';
import active from '../images/active.png';
import activeEnd from '../images/active-end.png';
import inactive from '../images/inactive.png';
import inactiveEnd from '../images/inactive-end.png';
import done from '../images/done.png';
import { Link } from 'react-router-dom';

export function CartPage(){
    const [cart, setCart] = useState(true);
    const [checkout, setCheckout] = useState(false);
    const [payment, setPayment] = useState(false);    

    return(
        <div className={styles.wrapper}>
            <Header/>
            <div className={styles.content}>
                <div className={styles.nav}>
                    <img src={cart ? active : done} alt="" />
                    <img src={checkout ? active : (payment ? done : inactive)} alt="" />
                    <img src={payment ? activeEnd : inactiveEnd} alt="" />
                </div>
                <div className={cart ? `${styles.container} ${styles.active}` : styles.container}>
                    <div className={styles.cardContainer}>
                        <ProductInCart/>
                        <ProductInCart/>
                        <ProductInCart/>
                        <ProductInCart/>
                        <ProductInCart/>
                        <ProductInCart/>
                    </div>
                    <div className={styles.details}>
                        <h1 className={styles.detailsTitle}>Payment details</h1>
                        <div className={styles.total}>
                            <p className={styles.totalText}>Grand Total</p>
                            <p className={styles.totalText}>$3000</p>
                        </div>
                        <div className={styles.detailsButton} onClick={e => {setCart(false); setCheckout(true);}}>Proceed to checkout</div>
                    </div>
                </div>
                <div className={checkout ? `${styles.container} ${styles.active}` : styles.container}>
                    <div className={styles.userInfoContainer}>
                        <div className={styles.userInfo}>
                            <div className={styles.inputTitle}>User</div>
                            <input type="text" value='Some user' readOnly className={styles.infoInput}/>
                            <div className={styles.inputTitle}>Ship to</div>
                            <input type="text" className={styles.infoInput}/>
                        </div>
                        <div className={styles.return} onClick={e => {setCheckout(false); setCart(true);}}>Return to cart</div>
                    </div>
                    <div className={styles.order}>
                        <h1 className={styles.title}>Your Order</h1>
                        <div className={styles.orderContainer}>
                            <OrderCard/>
                            <OrderCard/>
                            <OrderCard/>
                            <OrderCard/>
                            <OrderCard/>
                            <OrderCard/>
                        </div>
                        <div className={styles.total}>
                            <div className={styles.totalText}>Grand Total</div>
                            <div className={styles.totalText}>$3000</div>
                        </div>
                        <div className={styles.orderButton} onClick={e => {setCheckout(false); setPayment(true);}}>Continue to pay</div>
                    </div>
                </div>
                <div className={payment ? `${styles.container} ${styles.active}` : styles.container}>
                    <div className={styles.userInfoContainer}>
                            <div className={styles.userInfo}>
                                <div className={styles.inputTitle}>Card Number</div>
                                <input type="text" className={styles.infoInput}/>
                                <span className={styles.inputTitle}>Expiration date</span>
                                <input type="text" className={`${styles.infoInput} ${styles.small}`}/>
                                <span className={styles.inputTitle}>CVV</span>
                                <input type="text" className={`${styles.infoInput} ${styles.small}`}/>
                            </div>
                            <div className={styles.return} onClick={e => {setPayment(false); setCheckout(true);}}>Return to checkout</div>
                        </div>
                        <div className={styles.order}>
                            <h1 className={styles.title}>Your Order</h1>
                            <div className={styles.orderContainer}>
                                <OrderCard/>
                                <OrderCard/>
                                <OrderCard/>
                                <OrderCard/>
                                <OrderCard/>
                                <OrderCard/>
                            </div>
                            <div className={styles.total}>
                                <div className={styles.totalText}>Grand Total</div>
                                <div className={styles.totalText}>$3000</div>
                            </div>
                            <Link to='/' className={styles.orderButton}>Continue to pay</Link>
                        </div>
                    </div>
            </div>
            <Footer/>
        </div>
    );
}