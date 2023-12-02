import * as request from './requester.js';

const baseUrl = 'http://localhost:3030/data/characters';

export const getAll = () => request.get(`${baseUrl}?sortBy=_createdOn%20desc`);

export const getOne = (characterId) => request.get(`${baseUrl}/${characterId}`);

export const create = ({ category, imageUrl, description, moreInfo }) => request.post(baseUrl, { category, imageUrl, description, moreInfo });

export const edit = (characterId, { category, imageUrl, description, moreInfo }) => request.put(`${baseUrl}/${characterId}`, { category, imageUrl, description, moreInfo });

export const remove = (characterId) => request.del(`${baseUrl}/${characterId}`);


// CHARACTER DATA SAMPLE:
// category: "Bandit"
// description: "The Bandit class is Elden Ring's stealth assassin. With a dagger and a small shield, Bandit players need to avoid direct conflict with groups of enemies and should instead focus on critical hits with backstabs or sniping with the starting Short Bow."
// imageUrl: "/images/hero 3.png"
// moreInfo: "However, all its other stats are quite low, so it might be a good idea to spend your first Runes on boosting Vigor and Endurance to boost HP and Stamina to make the Astrologer less squishy and more agile. Then you can focus on bringing up your Intelligence even more to meet the higher Attribute requirements for better spells, making your older ones more powerful in the process."
// _createdOn: 1617194295480
// _id: "136777f5-3277-42ad-b874-76d043b069cb"
// _ownerId: "847ec027-f659-4086-8032-5173e2f9c93a"