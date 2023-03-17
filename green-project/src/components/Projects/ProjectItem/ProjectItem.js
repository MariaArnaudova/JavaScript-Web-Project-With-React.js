import styles from './ProjectItem.module.css';
import image from '../../../public/images/deck garden rooftop.jpg';

export const ProjectItem = () => {

    return (
        <div className={styles["project-info"]}>
            <div className={styles["image-info"]}>
                <img className={styles["list-img"]} src={image} alt="" />
            </div>

            <div className={styles["flex-content"]}>
                <h2 className={styles["title"]}>Exterior green design</h2>

                <div className={styles["info"]}>
                    <p className={styles["details-type"]}>
                        Decor type:
                        Roof garden;
                    </p>
                    <p className={styles["details-creator"]}>
                        Decor creator:
                        Christofer Plane ;
                    </p>
                    <button className={styles["details-button"]}>Details</button>
                </div>
            </div>
        </div>
    )
}