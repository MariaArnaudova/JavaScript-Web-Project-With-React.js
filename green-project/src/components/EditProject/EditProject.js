import styles from './EditProject.module.css';

export const EditProject = ({
    onEditProjectSubmit,
    onProjectChangedHandler,
    editIdeaForm,
}) => {

    const onSubmit = (e) => {
        e.preventDefault();

        onEditProjectSubmit(editIdeaForm._id, editIdeaForm);
    }

    return (

        // <!-- Edit Project -->

        <section className={styles["add-projects"]}>
            {/* <!-- <img className={styles["master-plan" src="images/master-plan.jpg" alt="Master Plan"> --> */}

            <div className={styles["add-projects-div"]}>
                <h2 className={styles["add-projects-title"]}>Edit Green Idea</h2>
                <form className={styles["add-projects-form"]} onSubmit={onSubmit} method="POST"  action="">
                    <div className={styles["form-group"]}>
                        <label htmlFor="description">Description</label>
                        <input className={styles["description"]} value={editIdeaForm.description} onChange={onProjectChangedHandler} type="text" name="description" id="description" placeholder="Description" />
                    </div>
                    <div className={styles["form-group"]}>
                        <label htmlFor="type">Decor type</label>
                        <input type="text" name="type" value={editIdeaForm.type} onChange={onProjectChangedHandler} id="type" placeholder="Decor type" />
                    </div>
                    <div className={styles["form-group"]}>
                        <label htmlFor="creator">Decor creator</label>
                        <input type="text" name="creator" value={editIdeaForm.creatorName} onChange={onProjectChangedHandler} id="creator" placeholder="Decor creator" />
                    </div>
                    <div className={styles["form-group"]}>
                        <label htmlFor="designStage">Design stage</label>
                        <input type="text" name="designStage" value={editIdeaForm.designStage} onChange={onProjectChangedHandler} id="designStage" placeholder="Design stage" />
                    </div>
                    <div className={styles["form-group"]}>
                        <label htmlFor="imageUrl">Image url</label>
                        <input type="text" name="imageUrl" value={editIdeaForm.imageUrl} onChange={onProjectChangedHandler} id="imageUrl" placeholder="Image Url" />
                    </div>
                    <div className={styles["form-group"]}>
                        <label htmlFor="area">Area</label>
                        <input type="text" name="area" value={editIdeaForm.area} onChange={onProjectChangedHandler} id="area" placeholder="Area" />
                    </div>
                    <div className={styles["form-group"]}>
                        <label htmlFor="plants">Decor plants</label>
                        <input type="text" name="plants" value={editIdeaForm.plants} onChange={onProjectChangedHandler} id="plants" placeholder="Decor plants" />
                    </div>
                    <button className={styles["button-idea"]} type="submit">Edit Idea</button>
                </form>
            </div>

        </section>
    )
};