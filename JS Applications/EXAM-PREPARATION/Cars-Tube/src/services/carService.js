import * as request from './requester.js';

const baseUrl = 'http://localhost:3030/data/cars';

export const getAll = () => request.get(`${baseUrl}?sortBy=_createdOn%20desc`);

export const getOne = (carId) => request.get(`${baseUrl}/${carId}`);

export const getOwn = (userId) => request.get(`${baseUrl}?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`); 

export const create = (carData) => request.post(baseUrl, carData);

export const edit = (carId, carData) => request.put(`${baseUrl}/${carId}`, carData);

export const remove = (carId) => request.del(`${baseUrl}/${carId}`);
