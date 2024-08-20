import { Footer } from './Footer';
import { Header } from './Header';
import { ProductCard } from './ProductCard';
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
                <div>
                    <div className={styles.products}>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                    </div>
                    <div className={styles.pages}>
                        <div className={styles.page}>&#60;</div>
                        <div className={`${styles.page} ${styles.active}`}>1</div>
                        <div className={styles.page}>2</div>
                        <div className={styles.page}>3</div>
                        <div className={styles.page}>4</div>
                        <div className={styles.page}>...</div>
                        <div className={styles.page}>10</div>
                        <div className={styles.page}>&#62;</div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
    );
}