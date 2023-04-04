import styles from './RegisterModal.module.css';

export const RegisterModal = ({
  registerServerError,
  onProjectCloseClick,
}

)=> {
    return(
    // <!-- register modal -->
    <section className={styles["register-modal"]}>

        <div className={styles["register-div"]}>
            <p className={styles["register-preview"]}> {registerServerError}</p>
            <button type="button" className={styles["close"]} onClick={() => onProjectCloseClick()}>Close</button>
        </div>

    </section>
    )
}