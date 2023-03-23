import styles from './Register.module.css';
import { Link } from "react-router-dom";

export const Register = () => {
    return(
        // <!-- Register Page -->
        <section className={styles["register"]}>
            {/* <!-- <img className={styles["section-image" src="images/master-plan.jpg" alt=""> --> */}
            <div className={styles["register-div"]}>
                <h2 className={styles["register-title"]}>Register</h2>
                <form className={styles["register-form"]} action="">
                    <div className={styles["form-group"]}>
                        <label htmlFor="username">Username</label>
                        <input className={styles["username"]} type="text" name="username" id="username" placeholder="username ..."/>
                    </div>
                    <div className={styles["form-group"]}>
                        <label htmlFor="email">E-mail</label>
                        <input type="text" name="email" id="email" placeholder="email ..."/>
                    </div>
                    <div className={styles["form-group"]}>
                        <label htmlFor="password">Password</label>
                        <input type="text" name="password" id="password" placeholder="password ..."/>
                    </div>
                    <div className={styles["form-group"]}>
                        <label htmlFor="confirmPassword">Confirm password</label>
                        <input type="text" name="confirmPassword" id="confirmPassword" placeholder="confirm password ..."/>
                    </div>

                    <button className={styles["button-idea"]} type="submit">Register</button>
                    <Link to="/login" className={styles["redirect-login"]} >If you have a registration click here</Link>
                </form>
            </div>

        </section>
    )
};