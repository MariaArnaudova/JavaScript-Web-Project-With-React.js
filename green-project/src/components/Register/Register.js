import { useContext , useState} from 'react';
import { Link } from "react-router-dom";

import { useForm } from '../../hook/useForm';
import { AuthContext } from '../../contexts/AuthContext';
import styles from './Register.module.css';

import { RegisterModal } from "./RegisterModal/RegisterModal";

export const Register = ({
    registerServerError,
    onProjectCloseClick
}) => {

    const [formErrors, setFormErros] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });

    const { onRegisterSubmit} = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        password: '',
        confirmPassword: '',
    }, onRegisterSubmit)

    const formValidate = (e) => {
        
        const value = e.target.value;   
        const errors = {};

        if (e.target.name === 'email' && (value.length < 3 || value.length > 20)) {
            errors.email = 'Email is not valid';
        } 

        if (e.target.name === 'password' && (value.length < 3 || value.length > 20)) {
            errors.password = 'Password is not valid';
        }

        if (e.target.name === 'confirmPassword' && (values.password !== values.confirmPassword)) {
            errors.password = 'Your password and confirmation password do not match.';
        }

        setFormErros(errors);
    };

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
                         onBlur={formValidate}
                         style={formErrors.email ? { borderColor: "red" } : {}}
                         />
                    </div>
                    {formErrors.email &&
                                    <p className={styles["form-error"]} >
                                        {formErrors.email}
                                    </p>
                                }
                    <div className={styles["form-group"]}>
                        <label htmlFor="password">Password</label>
                        <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="password ..." 
                        value={values.password}
                        onChange={changeHandler} 
                        onBlur={formValidate}
                        style={formErrors.password ? { borderColor: "red" } : {}}
                        />
                    </div>
                    {formErrors.password &&
                                    <p className={styles["form-error"]} >
                                        {formErrors.password}
                                    </p>
                                }
                    <div className={styles["form-group"]}>
                        <label htmlFor="confirmPassword">Confirm password</label>
                        <input 
                        type="password" 
                        name="confirmPassword"
                         id="confirmPassword" 
                         placeholder="confirm password ..."
                         value={values.confirmPassword}
                         onChange={changeHandler} 
                         onBlur={formValidate}
                         style={formErrors.password ? { borderColor: "red" } : {}}
                         />
                    </div>
                    {formErrors.confirmPassword &&
                                    <p className={styles["form-error"]} >
                                        {formErrors.confirmPassword}
                                    </p>
                                }
                    <button className={styles["button-idea"]} type="submit">Register</button>
                    <Link to="/login" className={styles["redirect-login"]} >If you have a registration click here</Link>
                </form>
            </div>
            {registerServerError && <RegisterModal
                registerServerError={registerServerError}
                onProjectCloseClick={onProjectCloseClick}
            />}
        </section>
    )
};