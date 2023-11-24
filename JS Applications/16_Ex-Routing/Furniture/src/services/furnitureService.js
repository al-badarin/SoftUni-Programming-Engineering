import * as request from './requester.js';

const baseUrl = 'http://localhost:3030/data/catalog';

export const getAll = () => request.get(baseUrl);

export const create = (furnitureData) => request.post(baseUrl, furnitureData);

export const getOne = (furnitureId) => request.get(`${baseUrl}/${furnitureId}`);

// export const edit = (furnitureId, furnitureData) => request.put(`${baseUrl}/${furnitureId}`, furnitureData);

// export const remove = (furnitureId) => request.del(`${baseUrl}/${furnitureId}`);

// export const search = (searchText) => {
//     const query = encodeURIComponent(`name LIKE "${searchText}"`);

//     return request.get(`${baseUrl}?where=${query}`);
// };


// description: "Medium table"
// img: "./images/table.png"
// make: "Table"
// material: "Hardwood"
// model: "Swedish"
// price: 235
// year: 2015
// _createdOn: 1615545143015
// _id: "53d4dbf5-7f41-47ba-b485-43eccb91cb95"
// _ownerId:"35c62d76-8152-4626-8712-eeb96381bea8"