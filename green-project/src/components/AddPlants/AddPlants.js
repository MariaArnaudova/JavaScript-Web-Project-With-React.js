import styles from './AddPlants.module.css';

export const AddPlants = ({
    addPlantsProject
}) => {

    return (
        <section className={styles["plants"]}>
            <div className={styles["plants-container"]}>
                <h2 className={styles["plants-title"]}>Add Plants</h2>
                <div className={styles["plants-divider"]}></div>
                <div className={styles["plants-details"]}>
                    <div className={styles["project-details-image"]}>
                        <div className={styles["project-proba"]}>

                            <img className={styles["details-image"]} src={addPlantsProject.imageUrl} />
                        </div>
                    </div>
                    <div className={styles["details-info"]}>
                        <h2>Add plants</h2>
                        <p className={styles["details-descriptions"]}>Description:
                            {addPlantsProject.description}
                        </p>
                        <p className={styles["details-type"]}>
                            Decor type:  {addPlantsProject.type};
                        </p>
                        <p className={styles["details-creator"]}>
                            Decor creator: {addPlantsProject.creator}
                        </p>
                        <p className={styles["details-area"]}>
                            Decor area: {addPlantsProject.area}
                        </p>
                        <p className={styles["details-designStage"]}>
                            Design stage: {addPlantsProject.designStage}
                        </p>
                        <p className={styles["plants"]}>
                            Decor plants: Lorem ipsum dolor sit amet consectetur ...

                        </p>
                        <div className={styles["form-group form-add-plants"]}>
                            {/* <label htmlFor="plants">Decor plants</label> */}
                            {/* <!-- <input className={styles["plant-input" type="text" name="plants" id="plants" placeholder="Plant name"> --> */}
                            <textarea name="plant-input" className={styles["textarea"]} id="plants" cols="20" rows="1"></textarea>
                            <button type="submit" className={styles["add"]}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )




}