import styles from './Details.module.css';
import image from '../../public/images/inerior1.jpg';

export const Details = () => {
    return(
        // <!-- Details page -->
        <section className={styles["details"]}>
            <div className={styles["project"]}>
                <h2 className={styles["project-title"]}>Interior decor</h2>
                <div className={styles["project-divider"]}></div>
                <div className={styles["project-details"]}>
                    <img className={styles["details-image details"]} src={image} alt="Details Inerior decor"/>
                    <div className={styles["details-info"]}>
                        <h2>Green details</h2>
                        <p className={styles["details-descriptions"]}>Description:
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Officia ratione consequatur rem beatae.
                        </p>
                        <p className={styles["details-type"]}>
                            Decor type:
                            Interior;
                        </p>
                        <p className={styles["details-creator"]}>
                            Decor creator:
                            Lorem ipsum ;
                        </p>
                        <p className={styles["details-area"]}>
                            Decor area:
                            Marina;
                        </p>
                        <p className={styles["details-designStage"]}>
                            Design stage:
                            Idea project.
                        </p>
                        <p className={styles["details-ideas"]}>
                            Decor plants: Lorem ipsum dolor sit amet consectetur ...

                        </p>
                        <div className={styles["buttons-details"]}>
                            <button className={styles["edit"]}>Edit Idea</button>
                            <button className={styles["delete"]}>Delete Project</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}