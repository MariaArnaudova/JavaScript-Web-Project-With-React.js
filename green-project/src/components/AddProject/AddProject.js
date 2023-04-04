import { useState } from 'react';

import styles from './AddProject.module.css'

export const AddProject = ({
    onCreateProjectSubmit
}) => {

    const [values, setValues] = useState({
        description: '',
        type: '',
        creator: '',
        designStage: '',
        imageUrl: '',
        area: '',
        plants: '',
    });

    const [formErrors, setFormErros] = useState({
        description: '',
        type: '',
        creator: '',
        designStage: '',
        imageUrl: '',
        area: '',
        plants: '',
    });

    const onChangeHandler = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }))
    };

    const onSubmit = (e) => {
        e.preventDefault();

        onCreateProjectSubmit(values);
    };

    const formValidate = (e) => {

        const value = e.target.value;
        const errors = {};
        if (e.target.name === 'type' && value.length < 3) {
            errors.type = 'Field is required';
        }
        if (e.target.name === 'description' && value.length < 3) {
            errors.description = 'Field is required';
        }
        if (e.target.name === 'creator' && value.length < 3) {
            errors.creator = 'Field is required';
        }
        if (e.target.name === 'designStage' && value.length < 3) {
            errors.designStage = 'Field is required';
        }
        if (e.target.name === 'imageUrl' && value.length < 3) {
            errors.imageUrl = 'Field is required';
        }
        if (e.target.name === 'area' && value.length < 3) {
            errors.area = 'Field is required';
        }
        if (e.target.name === 'plants' && value.length < 3) {
            errors.plants = 'Field is required';
        }
        setFormErros(errors);
    };

    let isTextAreaEmpty = true;

    const emptyValidation = (value) => {
        const isError = Object.values(value).some(v => v ===false);
        if (isError) {
            isTextAreaEmpty=false;
        }
        return isTextAreaEmpty;
    }

    return (

        // <!-- Add Project -->
        <section className={styles["add-projects"]}>
            {/* <!-- <img className={styles["master-plan" src="images/master-plan.jpg" alt="Master Plan"> --> */}

            <div className={styles["add-projects-div"]}>
                <h2 className={styles["add-projects-title"]}>Add Green Idea</h2>
                <form className={styles["add-projects-form"]} onSubmit={onSubmit} method="POST" action="">
                    <div className={styles["form-group"]}>
                        <label htmlFor="description">Description</label>
                        <input className={styles["description"]} value={values.description} onChange={onChangeHandler}
                            type="text" name="description" id="description" placeholder="Description"
                            onBlur={formValidate}
                            style={formErrors.description ? { borderColor: "red" } : {}} />
                    </div>
                    {formErrors.description &&
                        <p className={styles["form-error"]} >
                            {formErrors.description}
                        </p>
                    }

                    <div className={styles["form-group"]}>
                        <label htmlFor="type">Decor type</label>
                        <input type="text" value={values.type} onChange={onChangeHandler}
                            name="type" id="type" placeholder="Decor type"
                            onBlur={formValidate}
                            style={formErrors.type ? { borderColor: "red" } : {}} />
                    </div>
                    {formErrors.type &&
                        <p className={styles["form-error"]} >
                            {formErrors.type}
                        </p>
                    }
                    <div className={styles["form-group"]}>
                        <label htmlFor="creator">Decor creator</label>
                        <input type="text" value={values.creator} onChange={onChangeHandler}
                            name="creator" id="creator" placeholder="Decor creator"
                            onBlur={formValidate}
                            style={formErrors.creator ? { borderColor: "red" } : {}} />
                    </div>
                    {formErrors.creator &&
                        <p className={styles["form-error"]} >
                            {formErrors.creator}
                        </p>
                    }
                    <div className={styles["form-group"]}>
                        <label htmlFor="designStage">Design stage</label>
                        <input type="text" value={values.designStage} onChange={onChangeHandler}
                            name="designStage" id="designStage" placeholder="Design stage"
                            onBlur={formValidate}
                            style={formErrors.designStage ? { borderColor: "red" } : {}} />
                    </div>
                    {formErrors.designStage &&
                        <p className={styles["form-error"]} >
                            {formErrors.designStage}
                        </p>
                    }
                    <div className={styles["form-group"]}>
                        <label htmlFor="imageUrl">Image url</label>
                        <input type="text" value={values.imageUrl} onChange={onChangeHandler}
                            name="imageUrl" id="imageUrl" placeholder="Image Url"
                            onBlur={formValidate}
                            style={formErrors.imageUrl ? { borderColor: "red" } : {}} />
                    </div>
                    {formErrors.imageUrl &&
                        <p className={styles["form-error"]} >
                            {formErrors.imageUrl}
                        </p>
                    }
                    <div className={styles["form-group"]}>
                        <label htmlFor="area">Area</label>
                        <input type="text" value={values.area} onChange={onChangeHandler}
                            name="area" id="area" placeholder="Area"
                            onBlur={formValidate}
                            style={formErrors.area ? { borderColor: "red" } : {}} />
                    </div>
                    {formErrors.area &&
                        <p className={styles["form-error"]} >
                            {formErrors.area}
                        </p>
                    }
                    <div className={styles["form-group"]}>
                        <label htmlFor="plants">Decor plants</label>
                        <input type="text" value={values.plants} onChange={onChangeHandler}
                            name="plants" id="plants" placeholder="Decor plants"
                            onBlur={formValidate}
                            style={formErrors.plants ? { borderColor: "red" } : {}} />
                    </div>
                    {formErrors.plants &&
                        <p className={styles["form-error"]} >
                            {formErrors.plants}
                        </p>
                    }
                    <button className={styles["button-idea"]} 
                    onClick={() => emptyValidation(values)}     
                               
                    type="submit">Add Idea</button>
                </form>
            </div>

        </section>
    )
};