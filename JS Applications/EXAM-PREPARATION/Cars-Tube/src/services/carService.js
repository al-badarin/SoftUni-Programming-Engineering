import * as request from './requester.js';

const baseUrl = 'http://localhost:3030/data/cars';

export const getAll = () => request.get(`${baseUrl}?sortBy=_createdOn%20desc`);

export const getOne = (carId) => request.get(`${baseUrl}/${carId}`);

export const create = (carData) => request.post(baseUrl, carData);
