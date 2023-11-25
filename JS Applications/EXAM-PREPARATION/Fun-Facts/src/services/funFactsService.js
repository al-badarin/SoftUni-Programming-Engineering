import * as request from './requester.js';

const baseUrl = 'http://localhost:3030/data/facts';

export const getAll = () => request.get(`${baseUrl}?sortBy=_createdOn%20desc`);

export const getOne = (albumId) => request.get(`${baseUrl}/${albumId}`);

export const create = (albumData) => request.post(baseUrl, albumData);

export const edit = (albumId, factId, category, imageUrl, description, additionalInfo) => request.put(`${baseUrl}/${albumId}`, factId, category, imageUrl, description, additionalInfo);

export const remove = (albumId) => request.del(`${baseUrl}/${albumId}`);

// export const search = (searchText) => {
//     const query = encodeURIComponent(`name LIKE "${searchText}"`);

//     return request.get(`${baseUrl}?where=${query}`);
// };

// category: "Nature"
// description: "Prepare to be astounded by the power of hummingbirds!These tiny marvels can flap their wings up to 80 times per second,enabling them to hover, fly backward, and even upside down.Discover more about these delightful creatures and theirextraordinary abilities."
// imageUrl: "/images/fact 3.jpg"
// moreInfo: "Hummingbirds are truly remarkable creatures. With their incredible agility and unique flying abilities, they capture our imagination. These tiny birds can flap their wings at an astonishing rate of up to 80 times per second! This rapid wing movement allows them to hover in mid-air, fly backward, and even upside down. Their ability to defy gravity and maneuver with such precision is a marvel of nature. Delve into the world of ornithology to explore the diversity and extraordinary adaptations of these delightful avian wonders."
// _createdOn: 1617194295480
// _id: "136777f5-3277-42ad-b874-76d043b069cb"
// _ownerId: "847ec027-f659-4086-8032-5173e2f9c93a"