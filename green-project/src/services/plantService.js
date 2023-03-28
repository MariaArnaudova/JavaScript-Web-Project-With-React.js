import * as request from './requester';

const baseUrl = 'http://localhost:3030/data/plants';

export const getAll = async (projectId) => {
    const query = encodeURIComponent(`projectId="${projectId}"`);

    const result = await request.get(`${baseUrl}?where=${query}`);
    const plants = Object.values(result);

    return plants;
};

export const create = async (data) => {
    const result = await request.post(baseUrl, data);

    return result;
};