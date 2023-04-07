import styles from './LoginModal.module.css';

export const LoginModal = ({
  loginServerError,
  onProjectCloseClick,
}

)=> {
    return(
    // <!-- Login modal -->
    <section className={styles["login-modal"]}>

        <div className={styles["login-div"]}>
            <p className={styles["login-preview"]}> {loginServerError}</p>
            <button type="button" data-testid="close-button" className={styles["close"]} onClick={() => onProjectCloseClick()}>Close</button>
        </div>

    </section>
    )
}