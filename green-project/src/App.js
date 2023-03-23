import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
import { AuthContext } from './contexts/AuthContext';

import { authServiceFactory } from './services/authService';

import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { AddProject } from './components/AddProject/AddProject';
import { Projects } from './components/Projects/Projects';
import { Details } from './components/Details/Details';
import { EditProject } from './components/EditProject/EditProject';

const baseUrl = 'http://localhost:3030/jsonstore/projects';

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
    const [auth, setAuth] = useState({});
    const authService = authServiceFactory(auth.accessToken);

    useEffect(() => {
        fetch(baseUrl)
            .then(res => res.json())
            .then(data => {
                setProjects(Object.values(data))
            })
    }, [])

    const onCreateProjectSubmit = async (values) => {
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ ...values })
        });

        const result = await response.json();

        setProjects(state => [...state, result])
        navigate('/projects');
    };

    const onDetailsClick = async (projectId) => {
        const response = await fetch(`${baseUrl}/${projectId}`);
        const result = await response.json();
        console.log(result);
        setSelectedProject(result);
    };

    const onProjectDeleteClick = async (projectId) => {
        await fetch(`${baseUrl}/${projectId}`, { method: 'DELETE' });

        setProjects(state => state.filter(x => x._id !== projectId));
        setSelectedProject(null);
    };

    const onEditClick = async (projectId) => {
        const response = await fetch(`${baseUrl}/${projectId}`);
        const result = await response.json();
        setEditIdeaForm(result)
        navigate('/projects/:projectId/edit')
    }

    const onEditProjectSubmit = async (projectId, data) => {
        const response = await fetch(`${baseUrl}/${projectId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ ...data })
        });
        const result = await response.json();
        setProjects(state => state.map(x => x._id === projectId ? result : x))
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
            setAuth(result);
            
            navigate('/projects');
        } catch (error) {
            console.log('There is a problem');
        }
    };

    const context = {
        onLoginSubmit,
        userId : auth._id,
        token:auth.accessToken,
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
                        <Route path='/register' element={<Register />} />
                        <Route path='/create-project' element={<AddProject onCreateProjectSubmit={onCreateProjectSubmit} />} />
                        <Route path='/projects' element={<Projects
                            projects={projects}
                            selectedProject={selectedProject}
                            editProject={editProject}
                            onDetailsClick={onDetailsClick}
                            onProjectDeleteClick={onProjectDeleteClick}
                            onProjectCloseClick={onProjectCloseClick}
                            onEditClick={onEditClick}
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
