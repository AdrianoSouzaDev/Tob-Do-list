import styles from './Header.module.css';
import logo from "./../assets/Logo.svg";

export const Header = () => {


    return (
        <div className={styles.wrapper}>
            <header className={styles.header} >
                <img src={logo} alt="" />
            </header>
        </div>
    );
}