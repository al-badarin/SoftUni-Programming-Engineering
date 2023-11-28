import * as request from './requester.js';

const baseUrl = 'http://localhost:3030/data/motorcycles';

export const getAll = () => request.get(`${baseUrl}?sortBy=_createdOn%20desc`);

export const getOne = (motorcycleId) => request.get(`${baseUrl}/${motorcycleId}`);

export const create = (motorcycleData) => request.post(baseUrl, motorcycleData);

export const edit = (motorcycleId, motorcycleData) => request.put(`${baseUrl}/${motorcycleId}`, motorcycleData);

export const remove = (motorcycleId) => request.del(`${baseUrl}/${motorcycleId}`);

export const search = (searchText) => {
    const query = encodeURIComponent(`name LIKE "${searchText}"`);

    return request.get(`${baseUrl}?where=${query}`);
};

// about: "The Kawasaki ER6n 2016 boasts a well-engineered package, combining a responsive parallel-twin engine, comfortable ergonomics, and a modern design, making it a capable and practical choice for both everyday riding and spirited adventures."
// contact: "0886714523"
// imageUrl: "/images/Yamaha mt 07.png"
// mileage: "15000"
// model: "Yamaha mt 07"
// year: "2017"
// _createdOn: 1617194295480
// _id: "136777f5-3277-42ad-b874-76d043b069cb"
// _ownerId: "847ec027-f659-4086-8032-5173e2f9c93a"