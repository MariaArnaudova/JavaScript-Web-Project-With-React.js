import styles from './DeleteModal.module.css';

export const DeleteModal = (
  {
    _id,
    onProjectDeleteClick,
    onProjectCloseClick,
  }

)=> {
    return(
    // <!-- Delete modal -->
    <section className={styles["delete-modal"]}>

        <div className={styles["delete-div"]}>
            <h4 className={styles["delete-title"]}>Confirm Delete</h4>
            <p className={styles["delete-preview"]}> Are you sure you want to delete this project?</p>
            <button className={styles["button-idea"]} onClick={() => onProjectDeleteClick(_id)} >Delete</button>
            <button type="button" className={styles["close"]} onClick={() => onProjectCloseClick(_id)}>Close</button>
        </div>

    </section>
    )
}