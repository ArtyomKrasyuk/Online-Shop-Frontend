import styles from './MainPageCard.module.css';
import {Link} from 'react-router-dom';

export function MainPageCard({image, caption}){
    return(
        <Link to="/" className={styles.container}>
            <img src={image} alt="product" className={styles.image}/>
            <p className={styles.caption}>{caption}</p>
        </Link>
    );
}