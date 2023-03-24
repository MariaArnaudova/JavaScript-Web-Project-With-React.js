import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { AuthContext } from '../../contexts/AuthContext';

import styles from './Header.module.css';
import logo from '../../public/images/Logo_Crop.png';

export const Header = () => {
    const { isAuthenticated, email } = useContext(AuthContext);

    return (
        <header className={styles["header"]}>
            <p className={styles["logo"]}>
                <Link to="/"><img className={styles["logo-image"]} src={logo} alt="" /></Link>
            </p>

            <nav className={styles["nav-container"]}>
                <ul className={styles["nav"]} role="list">
                    <li className={styles["nav-item"]}>
                        <Link to="/" className={styles["nav-link"]}>Home</Link>
                    </li>
                    <li className={styles["nav-item"]}>
                        <Link to="/projects" className={styles["nav-link"]}>Projects</Link>
                    </li>
                    {isAuthenticated && (

                        <div className={styles["user"]}>
                            <span>{email}</span>
                            <li className={styles["nav-item"]}>
                                <Link to="/create-project" className={styles["nav-link"]}>Add Decor Idea</Link>
                            </li>
                            <li className={styles["nav-item"]}>
                                <Link to="/logout" className={styles["nav-link"]}>Logout</Link>
                            </li>
                        </div>
                    )}
                    {!isAuthenticated && (
                        <div className={styles["gest"]}>
                            <li className={styles["nav-item"]}>
                                <Link to="/login" className={styles["nav-link"]}>Login</Link>
                            </li>
                            <li className={styles["nav-item"]}>
                                <Link to="/register" className={styles["nav-link"]}>Register</Link>
                            </li>
                        </div>
                    )}


                </ul>
            </nav>
        </header>
    )
}