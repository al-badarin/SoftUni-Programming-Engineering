import * as request from './requester.js';

const baseUrl = 'http://localhost:3030/data/pets';

export const getAll = () => request.get(`${baseUrl}?sortBy=_createdOn%20desc&distinct=name`);

export const getOne = (petId) => request.get(`${baseUrl}/${petId}`);

export const create = (petData) => request.post(baseUrl, petData);

export const edit = (petId, petData) => request.put(`${baseUrl}/${petId}`, petData);

export const remove = (petId) => request.del(`${baseUrl}/${petId}`);

// export const search = (searchText) => {
//     const query = encodeURIComponent(`name LIKE "${searchText}"`);

//     return request.get(`${baseUrl}?where=${query}`);
// };


// age: "1 years"
// breed: "Teddy guinea pig"
// image: "../images/guinea-pig.jpg"
// name: "Chibi"
// weight: "1kg"
// _createdOn: 1617194295480
// _id: "136777f5-3277-42ad-b874-76d043b069cb"
// _ownerId: "847ec027-f659-4086-8032-5173e2f9c93a"