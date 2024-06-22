import * as request from './requester.js';

const baseUrl = 'http://localhost:3030/data/donation';

export async function donate(petId) {
    return request.post(baseUrl, petId);
}

export async function getDonations(petId) {
    return request.get(`${baseUrl}?where=petId%3D%22${petId}%22&distinct=_ownerId&count`);
}

export async function getOwnDonations(petId, userId) {
    return request.get(`${baseUrl}?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}