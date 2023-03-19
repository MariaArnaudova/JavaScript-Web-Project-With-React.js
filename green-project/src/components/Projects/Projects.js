import styles from './Projects.module.css';
import { useState } from 'react';

import { ProjectItem } from './ProjectItem/ProjectItem.js'
import { Details } from '../Details/Details';

const baseUrl = 'http://localhost:3030/jsonstore/projects';


export const Projects = ({
    projects,
}) => {

    const [selectedProject, setSelectedProject] = useState(null);

    const onDetailsClick = async (projectId) => {
        const response = await fetch(`${baseUrl}/${projectId}`);
        const result = await response.json();
        console.log(result);
        setSelectedProject(result);
    };
    console.log(selectedProject);
    console.log(onDetailsClick)

    return (
        <>
            {selectedProject && <Details {...selectedProject} />}
            <div className={styles["projects"]}>
                <h1>Landscape designs</h1>

                <ul className={styles["li-projects"]}>
                    {projects.map(p =>
                        <li key={p._id} className={styles["project-element"]}>
                            <ProjectItem {...p} onDetailsClick={onDetailsClick} />
                        </li>)}
                </ul>
                {/* <ul className={styles["li-projects"]}>
                <li className={styles["project-element"]}>
                    <ProjectItem/>
                </li>
            </ul> */}

                {projects.length === 0 && (
                    <h3 >No projects in gallery</h3>
                )}
            </div>
        </>
    )
}