import * as api from "./api.js";

const endpoints = {
    allTeams: "/data/teams",
}

export async function getAllTeams() {
    return api.get(endpoints.allTeams);
}