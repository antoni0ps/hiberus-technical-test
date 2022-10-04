import axios from "axios";

const token = localStorage.getItem('token');

axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` };

const baseURL = 'http://51.38.51.187:5050/api/v1/users';


const getUsers = () => {
    const request = axios.get(baseURL)
    return request
        .then(response => response.data)
        .catch(error => {
            if (error.response.status === 401) {
                console.log(error);     
            }
        })
}

const getUserData = () => {
    const request = axios.get(`${baseURL}/me`);
    let msg = '';
    return request.then(response => {
        return response.data          
    }).catch(error => {
        if (error.response.status === 404) {
            msg = 'Usuario no encontrado';
        } else if(error.response.status === 500) {
            msg = 'Error del servidor, inténtelo de nuevo';
        } else {
            msg = 'Ha ocurrido un error desconocido'
        }
        throw new Error(msg)
    })
}

const deleteUser = (id) => {
    const request = axios.delete(`${baseURL}/${id}`);
    let msg = '';
    return request.then(response => response.data
    ).catch(error => {
        if (error.response.status === 404) {
            msg ='usuario no encontrado' 
        }
        throw new Error(msg)
    })
}

const updateUser = (id, data) => {
    const request = axios.put(`${baseURL}/${id}`, data)
    let msg = '';
    return request.then((res) => {
        if (res.status === 200) {
            return res.data;
        }    
    }
    ).catch(error => {
        if (error.response.status === 404) {
            msg = 'Usuario no encontrado';
        } else if(error.response.status === 500) {
            msg = 'Error del servidor, inténtelo de nuevo';
        } else {
            msg = 'Ha ocurrido un error desconocido'
        }
        throw new Error(msg)
    })
}



export { getUsers, getUserData, deleteUser, updateUser }