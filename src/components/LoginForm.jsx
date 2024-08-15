import styles from './LoginForm.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import arrowLeft from '../images/arrow-left.png'

export function LoginForm({setter}){
    const [show, setShow] = useState(false);
    const [create, setCreate] = useState(false);

    return(
        <div className={create ? `${styles.content} ${styles.create}` : styles.content}>
            <img src={arrowLeft} alt="back" className={styles.exit} onClick={e => {setter(false);}} />
            <h1 className={styles.company}>Tech Heim</h1>
            <div className={styles.nav}>
                <div className={!create ? `${styles.navButton} ${styles.active}` : styles.navButton} onClick={e => {setCreate(false);}}>Log in</div>
                <div className={create ? `${styles.navButton} ${styles.active}` : styles.navButton} onClick={e => {setCreate(true);}}>Create Account</div>
            </div>
            <h1 className={!create ? `${styles.title} ${styles.active}` : styles.title}>Log in to Tech Heim</h1>
            <h1 className={create ? `${styles.title} ${styles.active}` : styles.title}>Create your account</h1>
            <div className={styles.form}>
                <input type="text" className={!create ? `${styles.input} ${styles.hidden}` : styles.input} placeholder='Full Name'/>
                <input type="email" className={styles.input} placeholder='Email'/>
                <input type="phone" className={!create ? `${styles.input} ${styles.hidden}` : styles.input} placeholder='Phone'/>
                <input type={show ? 'text' : 'password'} className={styles.input} placeholder='Password'/>
                <div className={show ? `${styles.showPassword} ${styles.show}` : styles.showPassword} onClick={e => {setShow(!show);}}></div>
                <button className={!create ? `${styles.submitBtn} ${styles.active}` : styles.submitBtn}>Log In</button>
                <button className={create ? `${styles.submitBtn} ${styles.active}` : styles.submitBtn}>Create Account</button>
            </div>
        </div>
    );
}