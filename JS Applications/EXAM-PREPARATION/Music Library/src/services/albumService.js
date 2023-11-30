import * as request from './requester.js';

const baseUrl = 'http://localhost:3030/data/albums';

export const getAll = () => request.get(`${baseUrl}?sortBy=_createdOn%20desc&distinct=name`);

export const getOne = (albumId) => request.get(`${baseUrl}/${albumId}`);

export const create = (albumData) => request.post(baseUrl, albumData);

export const edit = (albumId, albumData) => request.put(`${baseUrl}/${albumId}`, albumData);

export const remove = (albumId) => request.del(`${baseUrl}/${albumId}`);

// export const search = (searchText) => {
//     const query = encodeURIComponent(`name LIKE "${searchText}"`);

//     return request.get(`${baseUrl}?where=${query}`);
// };

// album: "The Wall"
// imageUrl: "/images/pink-floyd-the-wall.jpeg"
// label: "Columbia"
// release: "1979"
// sales: "18 million (30 million claimed)"
// singer: "Pink Floyd"
// _createdOn: 1617194295480
// _id: "136777f5-3277-42ad-b874-76d043b069cb"
// _ownerId: "847ec027-f659-4086-8032-5173e2f9c93a"