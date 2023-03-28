import { requestFactory } from './requester';

const baseUrl = 'http://localhost:3030/data/projects';

export const projectServiceFactory = (token) => {
    const request = requestFactory(token);

    const getAll = async () => {
        const result = await request.get(baseUrl);
        const projects = Object.values(result);
    
        return projects;
    };
    
    const getOne = async (projectId) => {
        const result = await request.get(`${baseUrl}/${projectId}`);
    
        return result;
    };
    
    const create = async (projectData) => {
        const result = await request.post(baseUrl, projectData);
    
        console.log(result);
    
        return result;
    };
    

    const edit = (projectId, data) => request.put(`${baseUrl}/${projectId}`, data);

    const deleteProject = (projectId) => request.delete(`${baseUrl}/${projectId}`);
    

    const addPlants = async (plantId, data) => {
        const result = await request.post(`${baseUrl}/${plantId}/plants`, data);
    
        return result;
    };


    return {
        getAll,
        getOne,
        create,
        edit,
        delete: deleteProject,
    };
}