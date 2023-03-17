import { useState } from 'react';

import styles from './AddProject.module.css'

export const AddProject = ({
    onCreateProjectSubmit
}) => {

    const [values, setValues] = useState({
        description: '',
        type: '',
        creatorName: '',
        designStage: '',
        imageUrl: '',
        area: '',
        plants: [],
    });

   const onChangeHandler = (e) => {
        setValues(state => ({ ...state, [e.target.name]: [e.target.value] }))
    };

    const onSubmit = (e) => {
        e.preventDefault();

        onCreateProjectSubmit(values);
    }

    return (

        // <!-- Add Project -->
        <section className={styles["add-projects"]}>
            {/* <!-- <img className={styles["master-plan" src="images/master-plan.jpg" alt="Master Plan"> --> */}

            <div className={styles["add-projects-div"]}>
                <h2 className={styles["add-projects-title"]}>Add Green Idea</h2>
                <form className={styles["add-projects-form"]} onSubmit={onSubmit} action="">
                    <div className={styles["form-group"]}>
                        <label htmlFor="description">Description</label>
                        <input className={styles["description"]} onChange={onChangeHandler} type="text" name="description" id="description" placeholder="Description" />
                    </div>
                    <div className={styles["form-group"]}>
                        <label htmlFor="type">Decor type</label>
                        <input type="text" onChange={onChangeHandler} name="type" id="type" placeholder="Decor type" />
                    </div>
                    <div className={styles["form-group"]}>
                        <label htmlFor="creator">Decor creator</label>
                        <input type="text" onChange={onChangeHandler} name="creatorName" id="creator" placeholder="Decor creator" />
                    </div>
                    <div className={styles["form-group"]}>
                        <label htmlFor="designStage">Design stage</label>
                        <input type="text" onChange={onChangeHandler} name="designStage" id="designStage" placeholder="Design stage" />
                    </div>
                    <div className={styles["form-group"]}>
                        <label htmlFor="imageUrl">Image url</label>
                        <input type="text" onChange={onChangeHandler} name="imageUrl" id="imageUrl" placeholder="Image Url" />
                    </div>
                    <div className={styles["form-group"]}>
                        <label htmlFor="area">Area</label>
                        <input type="text" onChange={onChangeHandler} name="area" id="area" placeholder="Area" />
                    </div>
                    <div className={styles["form-group"]}>
                        <label htmlFor="plants">Decor plants</label>
                        <input type="text" onChange={onChangeHandler} name="" id="plants" placeholder="Decor plants" />
                    </div>
                    <button className={styles["button-idea"]} type="submit">Add Idea</button>
                </form>
            </div>

        </section>
    )
};