import axios from "axios";

const token = localStorage.getItem('token');

axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` };


const usersURL = 'http://51.38.51.187:5050/api/v1/users';
const userMeURL = 'http://51.38.51.187:5050/api/v1/users/me';


const getUsers = () => {
    const request = axios.get(usersURL)
    return request
        .then(response => response.data)
    
}

export {getUsers}