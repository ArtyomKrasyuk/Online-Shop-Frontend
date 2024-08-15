import styles from './Header.module.css';
import logo from '../images/logo.png';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import search from '../images/search-normal.png';
import bag from '../images/bag.png';
import user from '../images/user.png';
import menu from '../images/menu.svg';
import close from '../images/close-circle.svg';
import { LoginForm } from './LoginForm';

export function Header(){
    const [state, setState] = useState(false);
    const [login, setLogin] = useState(false);
    return(
        <>
        {login && <LoginForm setter={setLogin}/>}
        <div className={styles.content}>
            <div className={styles.logo}>
                <img src={logo} alt="Logo" />
            </div>
            <img src={menu} alt="" className={styles.menu} onClick={e => {setState(!state)}}/>
            <div className={state ? `${styles.nav} ${styles.active}` : styles.nav}>
                <Link to="/" className={styles.link}>Home</Link>
                <Link to="/" className={styles.link}>Products</Link>
                <Link to="/" className={styles.link}>Blog</Link>
                <Link to="/" className={styles.link}>FAQ</Link>
                <Link to="/" className={styles.link}>Contact Us</Link>
            </div>
            <p className={styles.company}>Tech Heim</p>
            <div className={styles.buttons}>
                <div className={styles.icon}><img src={search} alt="search" /></div>
                <div className={styles.icon}><img src={bag} alt="bag" /></div>
                <div className={styles.icon} onClick={e => {setLogin(true);}} ><img src={user} alt="user" /></div>
            </div>
            <div className={state ? `${styles.menuCard} ${styles.active}` : styles.menuCard}>
                <div className={styles.menuCardTop}>
                    <img src={logo} alt="" />
                    <img src={close} alt="" className={styles.closeBtn} onClick={e => {setState(!state)}}/>
                </div>
            </div>
        </div>
        </>
    );
}