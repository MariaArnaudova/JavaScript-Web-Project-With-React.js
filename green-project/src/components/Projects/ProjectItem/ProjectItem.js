import { useContext } from "react";
import styles from './ProjectItem.module.css';

import { AuthContext } from '../../../contexts/AuthContext';

export const ProjectItem = ({
    _id,
    type,
    creator,
    imageUrl,
    onDetailsClick,
    onAddPlantsClick,
}) => {

    const { isAuthenticated } = useContext(AuthContext);

    return (
    <>
  
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
                        Decor creator: {creator};
                    </p>
                    <a href="#top">
                        <button className={styles["details-button"]} onClick={() => onDetailsClick(_id)}>Details</button>

                        {isAuthenticated && (<button type="button" className={styles["add"]} onClick={() => onAddPlantsClick(_id)}>Add Plants</button>)}
                    </a>

                </div>
            </div>
        </div>
        </>
    )
}