import * as request from './requester';
import { requestFactory } from './requester';

const baseUrl = 'http://localhost:3030/data/plants';


export const plantServiceFactory = (token) => {

    const request = requestFactory(token);

    const getAll = async (projectId) => {
        const query = encodeURIComponent(`projectId="${projectId}"`);

        const result = await request.get(`${baseUrl}?where=${query}`);
        const plants = Object.values(result);

        return plants;
    };

    const create = async (projectId, plants) => {
        const result = await request.post(baseUrl, { projectId, plants });

        return result;
    };


    return {
        getAll,
        create,
    };
}

