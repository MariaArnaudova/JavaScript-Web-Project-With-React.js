import {useNavigate } from "react-router-dom";
import styles from './Details.module.css';

import { DeleteModal } from '../DeleteModal/DeleteModal';
import { useContext, useState } from 'react';
import { EditProject } from '../EditProject/EditProject';
import { projectServiceFactory } from '../../services/projectService';

import { AuthContext } from '../../contexts/AuthContext';

export const Details = ({
    _id,
    description,
    type,
    creatorName,
    designStage,
    imageUrl,
    area,
    plants,
    _ownerId,
    selectedProject,
    onProjectDeleteClick,
    onProjectCloseClick,
    // onProjectEditClick,
    onEditClick,
    editProject,
}) => {

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const { userId, token } = useContext(AuthContext);
    const projectService = projectServiceFactory(token);
    const onDeleteProject = async (_id) => {
        setShowDeleteModal(true); 
    }

    return (
        // <!-- Details page -->
        <>
            <section className={styles["details"]}>
                <div className={styles["project"]}>
                    <h2 className={styles["project-title"]}>{type} decor</h2>
                    <div className={styles["project-divider"]}></div>
                    <div className={styles["project-details"]}>
                        <div className={styles["project-details-image"]}>
                            <div className={styles["project-proba"]}>

                            <img className={styles["details-image"]} src={imageUrl} alt="Details Inerior decor" />
                            </div>
                        </div>
                        {/* <img className={styles["details-image details"]} src={imageUrl} alt="Details Inerior decor" /> */}
                        <div className={styles["details-info"]}>
                            <h2>Green details</h2>

                            <p className={styles["details-descriptions"]}>Description: {description}.</p>
                            <p className={styles["details-type"]}>
                                Decor type: {type}
                            </p>
                            <p className={styles["details-creator"]}>
                                Decor creator: {creatorName}
                            </p>
                            <p className={styles["details-area"]}>
                                Decor area: {area};
                            </p>
                            <p className={styles["details-designStage"]}>
                                Design stage: {designStage}
                            </p>
                            <p className={styles["details-ideas"]}>
                                Decor plants: {plants}

                            </p>
                            <div className={styles["buttons-details"]}>

                                {_ownerId === userId && (
                                    <button type="button" className={styles["edit"]} onClick={() => onEditClick(_id)}>Edit Idea</button>
                                )}

                                {_ownerId === userId && (
                                <button type="button" className={styles["delete"]} onClick={onDeleteProject} >Delete Project</button>
                                 )} 

                                {/* <button className={styles["delete"]} onClick={() => onProjectDeleteClick(_id)} >Delete Project</button> */}
                                <button type="button" className={styles["close"]} onClick={() => onProjectCloseClick(_id)}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                {showDeleteModal && <DeleteModal
                    onProjectDeleteClick={onProjectDeleteClick}
                    onProjectCloseClick={onProjectCloseClick}
                    _id={_id} />}

            </section>

        </>
    )
};