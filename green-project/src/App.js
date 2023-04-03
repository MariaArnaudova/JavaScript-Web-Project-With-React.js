import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
import { AuthContext } from './contexts/AuthContext';

import { authServiceFactory } from './services/authService';
import { projectServiceFactory } from './services/projectService';
import { plantServiceFactory } from './services/plantService';

import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Login } from './components/Login/Login';
import { Logout } from './components/Logout/Logout';
import { Register } from './components/Register/Register';
import { AddProject } from './components/AddProject/AddProject';
import { Projects } from './components/Projects/Projects';
import { Details } from './components/Details/Details';
import { EditProject } from './components/EditProject/EditProject';
import { AddPlants } from './components/AddPlants/AddPlants';

// const baseUrl = 'http://localhost:3030/data/projects';

function App() {

    const navigate = useNavigate();
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);
    const [editProject, setEditProject] = useState(null);
    const [editIdeaForm, setEditIdeaForm] = useState({
        description: '',
        type: '',
        creatorName: '',
        designStage: '',
        imageUrl: '',
        area: '',
        plants: '',
    });

    const [addPlantsProject, setAddPlantsProject] = useState({});

    const [auth, setAuth] = useState({});
    const authService = authServiceFactory(auth.accessToken);
    const projectService = projectServiceFactory(auth.accessToken);

    useEffect(() => {
        projectService.getAll()
            .then(result => {
                setProjects(result);
            })
    }, [])

    const onCreateProjectSubmit = async (values) => {
        const newProject = await projectService.create(values);
        setProjects(state => [...state, newProject])
        navigate('/projects');
    };

    const onDetailsClick = async (projectId) => {
        const detailProject = await projectService.getOne(projectId);
        //  console.log(detailProject);
        setSelectedProject(detailProject);
    };

    const onProjectDeleteClick = async (projectId) => {
        await projectService.delete(projectId);
        setProjects(state => state.filter(x => x._id !== projectId));
        setSelectedProject(null);
        navigate('/projects');
    };

    const onEditClick = async (projectId) => {
        const editProject = await projectService.getOne(projectId);
        setEditIdeaForm(editProject)
        navigate('/projects/:projectId/edit')
    }

    const onEditProjectSubmit = async (projectId, data) => {

        const editProject = await projectService.edit(projectId, data);
        setProjects(state => state.map(x => x._id === projectId ? editProject : x))
        setSelectedProject(null)
        navigate('/projects');
    };

    const onProjectChangedHandler = (e) => {
        setEditIdeaForm(state => ({ ...state, [e.target.name]: e.target.value }))
    }

    const onProjectCloseClick = () => {
        setSelectedProject(null);
    }

    const onLoginSubmit = async (data) => {
        try {
            const result = await authService.login(data);
            console.log(result);
            setAuth(result);

            navigate('/projects');
        } catch (error) {
            console.log('There is a problem');
        }
    };

    const onRegisterSubmit = async (values) => {
        const { confirmPassword, ...registerData } = values;
        if (confirmPassword !== registerData.password) {
            return;
        }

        try {
            const result = await authService.register(registerData);
            setAuth(result);
            navigate('/projects');
        } catch (error) {
            console.log('There is a problem');
        }
    }
    // const onDeleteToken = async () => {
    //    await setAuth({});
    // }

    const onLogout = async () => {
        setAuth({});
        await authService.logout();
    };

    const onAddPlantsClick = async (projectId) => {
        const addPlantsProject = await projectService.getOne(projectId);
        setAddPlantsProject(addPlantsProject)
        navigate(`/projects/${projectId}/add-plants`);
    }

    const context = {
        onLogout,
        onLoginSubmit,
        onRegisterSubmit,
        userId: auth._id,
        token: auth.accessToken,
        email: auth.email,
        isAuthenticated: !!auth.accessToken
    }

    return (
        <AuthContext.Provider value={context}>

            <div className="App">
                <Header />
                <main id="main-content">
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/logout' element={<Logout />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/projects/:projectId/add-plants' element={<AddPlants/>} />
                        <Route path='/create-project' element={<AddProject onCreateProjectSubmit={onCreateProjectSubmit} />} />
                        <Route path='/projects' element={<Projects
                            projects={projects}
                            selectedProject={selectedProject}
                            editProject={editProject}
                            onDetailsClick={onDetailsClick}
                            onProjectDeleteClick={onProjectDeleteClick}
                            onProjectCloseClick={onProjectCloseClick}
                            onEditClick={onEditClick}
                            onAddPlantsClick={onAddPlantsClick}
                        />} />
                        <Route path='/projects/:projectId' element={<Details />} />
                        <Route path='/projects/:projectId/edit' element={<EditProject
                            onProjectChangedHandler={onProjectChangedHandler}
                            editIdeaForm={editIdeaForm}
                            onEditProjectSubmit={onEditProjectSubmit}
                        // editProject={editProject}
                        />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </AuthContext.Provider>
    );
}

export default App;
