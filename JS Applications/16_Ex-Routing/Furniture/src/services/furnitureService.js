import * as request from './requester.js';

const baseUrl = 'http://localhost:3030/data/furnitures';

export const getAll = () => request.get(`${baseUrl}?sortBy=_createdOn%20desc&distinct=name`);

export const getOne = (furnitureId) => request.get(`${baseUrl}/${furnitureId}`);

export const create = (furnitureData) => request.post(baseUrl, furnitureData);

export const edit = (furnitureId, furnitureData) => request.put(`${baseUrl}/${furnitureId}`, furnitureData);

export const remove = (furnitureId) => request.del(`${baseUrl}/${furnitureId}`);

export const search = (searchText) => {
    const query = encodeURIComponent(`name LIKE "${searchText}"`);

    return request.get(`${baseUrl}?where=${query}`);
};