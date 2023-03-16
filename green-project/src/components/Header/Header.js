import styles from './Header.module.css';
import logo from '../../public/images/Logo_Crop.png';

export const  Header = () => {
    return(
        <header className={styles["header"]}>
        <p className={styles["logo"]}>
            <a href="/"><img className={styles["logo-image"]} src={logo} alt=""/></a>
        </p>

        <nav className={styles["nav-container"]}>
            <ul className={styles["nav"]} role="list">
                <li className={styles["nav-item"]}>
                    <a href="/" className={styles["nav-link"]}>Home</a>
                </li>
                <li className={styles["nav-item"]}>
                    <a href="/projects" className={styles["nav-link"]}>Projects</a>
                </li>
                <li className={styles["nav-item"]}>
                    <a href="/projects" className={styles["nav-link"]}>Add Decor Idea</a>
                </li>
                <li className={styles["nav-item"]}>
                    <a href="/login" className={styles["nav-link"]}>Login</a>
                </li>
                <li className={styles["nav-item"]}>
                    <a href="/logout" className={styles["nav-link"]}>Logout</a>
                </li>
                <li className={styles["nav-item"]}>
                    <a href="/register" className={styles["nav-link"]}>Register</a>
                </li>
            </ul>
        </nav>
    </header>
    )
}