import styles from './Footer.module.css';
import location from '../images/location.svg';
import call from '../images/call-calling.svg';
import message from '../images/sms-edit.svg';

export function Footer(){
    return(
        <div className={styles.footer}>
            <div className={styles.content}>
                <p className={styles.company}>2024 Tech Heim</p>
                <div className={styles.contacts}>
                    <div className={styles.contact}>
                        <img src={location} alt="" />
                        <p className={styles.contactInformation}>123 Main Street, Anytown, Russia</p>
                    </div>
                    <div className={styles.contact}>
                        <img src={call} alt="" />
                        <p className={styles.contactInformation}>+71234567890</p>
                    </div>
                    <div className={styles.contact}>
                        <img src={message} alt="" />
                        <p className={styles.contactInformation}>admin@example.com</p>
                    </div>
                </div>
            </div> 
        </div>
    );
}