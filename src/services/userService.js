import axios from "axios";

const token = localStorage.getItem('token');

axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` };

const baseURL = 'http://51.38.51.187:5050/api/v1/users';

const userMeURL = 'http://51.38.51.187:5050/api/v1/users/me';
const updateAndDeleteURL = 'http://51.38.51.187:5050/api/v1/users/'


const getUsers = () => {
    const request = axios.get(baseURL)
    return request
        .then(response => response.data)
        .catch(error => {
            if (error.response.status === 401) {
                   //AGREGAR mensajes error
            }
        })
}

const getUserData = () => {
    const request = axios.get(`${baseURL}/me`);
    return request.then(response => {
        return response.data          // AGREGAR CATCH Y TOAST
    });
}

const deleteUser = (id) => {
    const request = axios.delete(`${baseURL}/${id}`);
    return request.then(response => response.data
    ).catch(error => {
        if (error.response.status === 404) {
            console.log('usuario no encontrado'); //AGREGAR TOAST
        }
    })
}

const updateUser = (id, data) => {
    const request = axios.put(`${baseURL}/${id}`, data)
    return request.then(response => {
        console.log(response.data);
        
    }
    ).catch(error => {
        if (error.response.status === 404) {
            console.log('usuario no encontrado'); //AGREGAR TOAST
        } else {
            console.log(error);
            
        }
    })
}



export { getUsers, getUserData, deleteUser, updateUser }