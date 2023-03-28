import styles from './ProjectItem.module.css';

export const ProjectItem = ({
    _id,
    type,
    creatorName,
    imageUrl,
    onDetailsClick,
    onAddPlantsClick,
}) => {

    return (
        <div className={styles["project-info"]}>
            <div className={styles["image-info"]}>
                <img className={styles["list-img"]} src={imageUrl} alt="" />
            </div>

            <div className={styles["flex-content"]}>
                <h2 className={styles["title"]}>{type}</h2>

                <div className={styles["info"]}>
                    <p className={styles["details-type"]}>
                        Decor type: {type}
                    </p>
                    <p className={styles["details-creator"]}>
                        Decor creator: {creatorName} ;
                    </p>
                    <a href="#top">
                        <button className={styles["details-button"]} onClick={() => onDetailsClick(_id)}>Details</button>
                        <button type="button" className={styles["add"]} onClick={() => onAddPlantsClick(_id)}>Add Plants</button>
                    </a>

                </div>
            </div>
        </div>
    )
}