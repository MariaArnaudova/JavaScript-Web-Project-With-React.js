import { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import styles from './AddPlants.module.css';

import { plantServiceFactory } from '../../services/plantService';
import { projectServiceFactory } from '../../services/projectService';
import { AuthContext } from '../../contexts/AuthContext';
import { NewPlants } from '../NewPlants/NewPlants.js';



export const AddPlants = ({
    addPlantsProject,
    addPlants
}) => {
    const [project, setProject] = useState({});

    const { token } = useContext(AuthContext);

    const { projectId } = useParams();
    const navigate = useNavigate();
    const plantService = plantServiceFactory(token);
    const projectService = projectServiceFactory(token);


    useEffect(() => {
        Promise.all([
            projectService.getOne(projectId),
            plantService.getAll(projectId)
        ])
            .then(([projectData, newPlants]) => {
                setProject({
                    ...projectData,
                    newPlants,
                });
            });

        console.log(project.newPlants)

    }, [projectId ])

    const onPlantSubmit = async (plantsValues) => {
        const addedPlants = await plantService.create(projectId, plantsValues.typePlant);
        console.log(addedPlants)
        setProject(state => ({
            ...state,
            newPlants: [...state.newPlants, addedPlants],
        }));
        console.log(project.newPlants)
        // navigate(`/projects/${projectId}/add-plants`)
    };

    console.log(project)
    return (
        <section className={styles["plants"]}>
            <div className={styles["plants-container"]}>
                <h2 className={styles["plants-title"]}>Add Plants</h2>
                <div className={styles["plants-divider"]}></div>
                <div className={styles["plants-details"]}>
                    <div className={styles["project-details-image"]}>
                        <div className={styles["project-proba"]}>

                            <img className={styles["details-image"]} src={project.imageUrl} />
                        </div>
                    </div>
                    <div className={styles["details-info"]}>
                        <h2>Add plants</h2>
                        <p className={styles["details-descriptions"]}>Description:
                            {project.description}
                        </p>
                        <p className={styles["details-type"]}>
                            Decor type:  {project.type};
                        </p>
                        <p className={styles["details-creator"]}>
                            Decor creator: {project.creator}
                        </p>
                        <p className={styles["details-area"]}>
                            Decor area: {project.area}
                        </p>
                        <p className={styles["details-designStage"]}>
                            Design stage: {project.designStage}
                        </p>
                        <p className={styles["plants"]}>
                            Decor plants: {project.plants}
                        </p>

                        <div>
                            <h4>New plants:</h4>
                            {/* <ul>
                        
                                {project.newPlants && project.newPlants.map(x => (
                                    <li key={x._id} className="plant"> */}
                                        {/* <p>{x.author.email}: {x.plant}</p> */}
                                        {/* <p>{x.plant}</p>
                                    </li>,
                                    console.log(x.plant)
                                ))}
                            </ul> */}

                            {project.newPlants && project.newPlants.map(x => (                                                                        
                                        <p>{x.plant}</p>
                                ))}

                            {!project.newPlants?.length && (
                                <p className="no-plants">No new plants.</p>
                            )}
                        </div>

                        <NewPlants onPlantSubmit={onPlantSubmit} />

                    </div>
                </div>
            </div>
        </section>

    )




}