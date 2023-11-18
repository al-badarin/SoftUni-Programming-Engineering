import * as api from "./api.js";

const endpoints = {
    allTeams: "/data/teams",
    allTeamMembers: "/data/members",
}

export async function getAllTeams() {
    return api.get(endpoints.allTeams);
}

export async function getAllTeamMembers() {
    return api.get(endpoints.allTeamMembers);
}