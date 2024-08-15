import styles from './MainPage.module.css';

import {Link} from 'react-router-dom';
import {Header} from './Header';
import { MainPageCard } from './MainPageCard';
import { Footer } from './Footer';
import { LoginForm } from './LoginForm';
import { useState } from 'react';

import computers from '../images/computers.png';
import accessories from '../images/accessories.png';
import camera from '../images/camera.png';
import laptop from '../images/laptop.png';
import smartPhone from '../images/smart_phone.png';
import gaming from '../images/gaming.png';
import smartWatch from '../images/smart_watch.png';
import apple from '../images/apple.png';
import sony from '../images/sony.png';
import samsung from '../images/samsung.png';
import canon from '../images/canon.png';
import huawei from '../images/huawei.png';
import lenovo from '../images/lenovo.png';
import tech from '../images/tech.svg';
import guarantee from '../images/guarantee.svg';
import support from '../images/support.svg';

export function MainPage(){
    const [state, setState] = useState(false);
    
    return(
        <>
        <Header/>
        <div className={styles.content}>
            <div className={styles.welcomeFrame}>
                <div className={styles.welcomeFrameText}>
                    <h1 className={styles.welcomeTitle}>Tech Heim</h1>
                    <p className={styles.welcomeSubtitle}>"Join the <span className={styles.orangeText}>digital revolution</span>"</p>
                    <Link to="/" className={styles.welcomeFrameButton}>Explore More</Link>
                </div>
                <img src={computers} alt="icon" className={styles.computers}/>
            </div>
            <div className={styles.categories}>
                <MainPageCard image={accessories} caption={'Accessories'}/>
                <MainPageCard image={camera} caption={'Camera'}/>
                <MainPageCard image={laptop} caption={'Laptop'}/>
                <MainPageCard image={smartPhone} caption={'Smart Phone'}/>
                <MainPageCard image={gaming} caption={'Gaming'}/>
                <MainPageCard image={smartWatch} caption={'Smart Watch'}/>
            </div>
            <div className={styles.brands}>
                <h1 className={styles.brandsTitle}>Top Brands</h1>
                <div className={styles.brandsImages}>
                    <img src={apple} alt="apple" />
                    <img src={sony} alt="sony" />
                    <img src={samsung} alt="samsung" />
                    <img src={canon} alt="canon" />
                    <img src={huawei} alt="huawei" />
                    <img src={lenovo} alt="lenovo" />
                </div>
            </div>
            <div className={styles.advantages}>
                <div className={styles.advantage}>
                    <img src={tech} alt="" />
                    <p className={styles.advantageText}>Latest and Greatest Tech</p>
                </div>
                <div className={styles.advantage}>
                    <img src={guarantee} alt="" />
                    <p className={styles.advantageText}>Guarantee</p>
                </div>
                <div className={styles.advantage}>
                    <img src={support} alt="" />
                    <p className={styles.advantageText}>24/7 Support</p>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}