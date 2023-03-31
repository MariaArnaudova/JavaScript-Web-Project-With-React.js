import { useContext, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import styles from './AddPlants.module.css';
import { useForm } from "../../hook/useForm";

import { plantServiceFactory } from '../../services/plantService';
import { AuthContext } from '../../contexts/AuthContext';

export const AddPlants = ({
    addPlantsProject
}) => {
    const { userId, token } = useContext(AuthContext);

    const { projectId } = useParams();
    console.log(projectId)
    const navigate = useNavigate();
    const plantService = plantServiceFactory(token);

    const [plants, setPlants] = useState([]);
   
    const onPlantSubmit = async (plantsValues) => {
        const addedPlants =await plantService.create(projectId, plantsValues.typePlant);
        console.log(addedPlants)
        setPlants(state => [...state, addedPlants]);
        navigate('/projects')
    };

    const { values, changeHandler, onSubmit } = useForm({
        typePlant:''
    }, onPlantSubmit);

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
                            Decor plants: {addPlantsProject.plants}

                        </p>
                        <div className={styles["form-group form-add-plants"]}>
                            {/* <label htmlFor="plants">Decor plants</label> */}
                            {/* <!-- <input className={styles["plant-input" type="text" name="plants" id="plants" placeholder="Plant name"> --> */}
                            <form onSubmit={onSubmit} method="POST" action="">
                                <textarea name="typePlant" className={styles["textarea"]}
                                 onChange={changeHandler}
                                 value={values.typePlant}
                                //  value={plantsValues.typePlant}
                                  id="plants" cols="20" rows="1"></textarea>
                                <button type="submit" className={styles["add"]}>Add</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </section>

    )




}