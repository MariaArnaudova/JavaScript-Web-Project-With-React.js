import styles from './Details.module.css';
// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import image from '../../public/images/inerior1.jpg';
// const baseUrl = 'http://localhost:3030/jsonstore/projects';

export const Details = ({
    _id,
    description,
    type,
    creatorName,
    designStage,
    imageUrl,
    area,
    plants,
    onProjectDeleteClick,
}) => {
    // const [projectDetails, setDetails] = useState({});
    // const { projectId } = useParams();

    // useEffect(() => {
    //     fetch(`${baseUrl}/${projectId}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             setDetails(data);
    //             console.log(projectDetails)
    //         })
    // }, [])

    return (
        // <!-- Details page -->
        <>
        <section className={styles["details"]}>
            <div className={styles["project"]}>
                <h2 className={styles["project-title"]}>{type} decor</h2>
                <div className={styles["project-divider"]}></div>
                <div className={styles["project-details"]}>
                    <img className={styles["details-image details"]} src={imageUrl} alt="Details Inerior decor" />
                    <div className={styles["details-info"]}>
                        <h2>Green details</h2>
                        <p className={styles["details-descriptions"]}>Description:{description}.</p>
                        <p className={styles["details-type"]}>
                            Decor type:
                            {type}
                        </p>
                        <p className={styles["details-creator"]}>
                            Decor creator:
                            {creatorName}
                        </p>
                        <p className={styles["details-area"]}>
                            Decor area:
                            {area};
                        </p>
                        <p className={styles["details-designStage"]}>
                            Design stage:
                            {designStage}
                        </p>
                        <p className={styles["details-ideas"]}>
                            Decor plants: {plants}

                        </p>
                        <div className={styles["buttons-details"]}>
                            <button className={styles["edit"]}>Edit Idea</button>
                            <button className={styles["delete"]} onClick={() => onProjectDeleteClick(_id)} >Delete Project</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}