import { useContext } from 'react';
import { Link } from "react-router-dom";

import { useForm } from '../../hook/useForm';
import { AuthContext } from '../../contexts/AuthContext';
import styles from './Register.module.css';

export const Register = () => {

    const { onRegisterSubmit} = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        password: '',
        confirmPassword: '',
    }, onRegisterSubmit)
    return (
        // <!-- Register Page -->
        <section className={styles["register"]}>
            {/* <!-- <img className={styles["section-image" src="images/master-plan.jpg" alt=""> --> */}
            <div className={styles["register-div"]}>
                <h2 className={styles["register-title"]}>Register</h2>
                <form className={styles["register-form"]} onSubmit={onSubmit} method="POST" action="">
                
                    <div className={styles["form-group"]}>
                        <label htmlFor="email">E-mail</label>
                        <input
                         type="text" 
                         name="email" 
                         id="email" 
                         placeholder="email ..."
                         value={values.email}
                         onChange={changeHandler} 
                         />
                    </div>
                    <div className={styles["form-group"]}>
                        <label htmlFor="password">Password</label>
                        <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="password ..." 
                        value={values.password}
                        onChange={changeHandler} 
                        />
                    </div>
                    <div className={styles["form-group"]}>
                        <label htmlFor="confirmPassword">Confirm password</label>
                        <input 
                        type="password" 
                        name="confirmPassword"
                         id="confirmPassword" 
                         placeholder="confirm password ..."
                         value={values.confirmPassword}
                         onChange={changeHandler} 
                         />
                    </div>

                    <button className={styles["button-idea"]} type="submit">Register</button>
                    <Link to="/login" className={styles["redirect-login"]} >If you have a registration click here</Link>
                </form>
            </div>

        </section>
    )
};