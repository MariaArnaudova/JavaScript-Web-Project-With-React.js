import styles from "./Login.module.css";

export const Login = () => {
    return(
        <section className={styles["login"]}>

        <div className={styles["login-div"]}>
            <h2 className={styles["login-title"]}>Login</h2>
            <p className={styles["login-preview"]}>Log in to your profile and add your new project</p>
            <form className={styles["login-form"]} action="">
                <div className={styles["form-group"]}>
                    <label htmlFor="username">Username</label>
                    <input className={styles["username"]} type="text" name="username" id="username" placeholder="username ..."/>
                </div>
                <div className={styles["form-group"]}>
                    <label htmlFor="email">E-mail</label>
                    <input type="text" name="email" id="email" placeholder="email ..."/>
                </div>

                <button className={styles["button-idea"]} type="submit">Login</button>
            </form>
        </div>

    </section>
    )
}