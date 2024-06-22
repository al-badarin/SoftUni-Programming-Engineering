import * as request from './requester.js';

const baseUrl = 'http://localhost:3030/data/characters';
const likeUrl = 'http://localhost:3030/data/useful';

export async function getOneCharacter(characterId){
    return request.get(`${baseUrl}/${characterId}`);
}

export async function likecharacter(characterId) {
    return request.post(likeUrl, characterId);
}

export async function getLikes(characterId) {
    return request.get(`${likeUrl}?where=characterId%3D%22${characterId}%22&distinct=_ownerId&count`);
}

export async function hasLiked(characterId, user) {
    if (!user) {
        return false;
    } else {
        const userId = user._id;
        const likes = await request.get(`${likeUrl}?where=characterId%3D%22${characterId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
        return likes.length > 0;
    }
}

// export async function getOwnLikes(characterId, userId) {
//     return await request.get(`${baseUrl}?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
// }
