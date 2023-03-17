import styles from './Projects.module.css';
import {ProjectItem} from './ProjectItem/ProjectItem.js' 
// import styles from './ProjectItem/ProjectItem.module.css';

export const Projects = () => {
    return (
        <div className={styles["projects"]}>
            <h1>Landscape designs</h1>
            <ul className={styles["li-projects"]}>
                <li className={styles["project-element"]}>
                    <ProjectItem/>
                </li>
            </ul>
        </div>
    )
}