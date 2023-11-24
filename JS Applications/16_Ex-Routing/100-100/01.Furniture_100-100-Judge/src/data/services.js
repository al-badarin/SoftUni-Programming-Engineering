import { del, get, post, put } from "./api.js";


const endpoints = {
    catalog: '/data/catalog',
    byId: '/data/catalog/'
}

export async function getAllRecords() {
    return get(endpoints.catalog);
}

export async function getById(id) {
    return get(endpoints.byId + id);
}

export async function createRecords(data) {
    return post(endpoints.catalog, data)
}

export async function updateRecord(id, data) {
    return put(endpoints.byId + id, data);
}

export async function deleteRecord(id) {
    return del(endpoints.byId + id);
}

export async function myRecord(userId){
    return get(`/data/catalog?where=_ownerId%3D%22${userId}%22`)
}