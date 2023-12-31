import * as request from './requester.js';
import * as authService from './authService.js'

const baseUrl = 'http://localhost:3030/users';

export const login = (username, password) =>
    request.post(`${baseUrl}/login`, { username, password })
        .then(user => {
            authService.saveUser(user);

            return user;
        });

export const register = (username, password) =>
    request.post(`${baseUrl}/register`, { username, password })
        .then(user => {
            authService.saveUser(user);

            return user;
        });

export const logout = () =>
    fetch(`${baseUrl}/logout`, { headers: { 'X-Authorization': authService.getToken() } })
        .then(() => {
            authService.deleteUser();
        });

// localStorage.removeItem(user);
// return request.get(`${baseUrl}/logout`);
