import { Footer } from './Footer';
import { Header } from './Header';
import styles from './Products.module.css';

export function Products(){
    return(
        <div className={styles.wrapper}>
        <Header/>
        <div className={styles.content}>
            <div className={styles.title}>
                Improve this title later
            </div>
            <div className={styles.productsContainer}>
                <div className={styles.filters}>
                    <h1>Filters</h1>
                </div>
                <div className={styles.products}>

                </div>
            </div>
        </div>
        <Footer/>
        </div>
    );
}