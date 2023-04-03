import { useForm } from "../../hook/useForm";
import styles from './NewPlants.module.css';

export const NewPlants = ({
    onPlantSubmit
}) => {

    const { values, changeHandler, onSubmit } = useForm({
        typePlant: ''
    }, onPlantSubmit);

    let isTextAreaEmpty = true;
    
    const emptyValidation = (values) =>{
        if(values){
            isTextAreaEmpty=false;
        }

        return isTextAreaEmpty;
    }
    return (   

        <div className={styles["form-group form-add-plants"]}>
            {/* <label htmlFor="plants">Decor plants</label> */}
            {/* <!-- <input className={styles["plant-input" type="text" name="plants" id="plants" placeholder="Plant name"> --> */}
            <form  className={styles["form-add-plants"]} onSubmit={onSubmit} method="POST" action="">
                <textarea name="typePlant" className={styles["textarea"]}
                    onChange={changeHandler}
                    value={values.typePlant}
                    id="plants" cols="20" rows="1"></textarea>
                <button type="submit" className={styles["add"]} onClick={() => emptyValidation(values)} >Add</button>
            </form>

        </div>
    )
}