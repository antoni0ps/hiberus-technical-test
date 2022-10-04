import axios from "axios";

//  const token = localStorage.getItem('token');

// axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` };

const baseURL = 'http://51.38.51.187:5050/api/v1/users';


const getUsers = (token) => {
    const request = axios.get(baseURL, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    return request
        .then(response => response.data)
        .catch(error => {
            if (error.response.status === 401) {
                console.log(error);
            }
        })
}

const getUserData = (token) => {
    const request = axios.get(`${baseURL}/me`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    let msg = '';
    return request
        .then(response => response.data)
        .catch(error => {
            if (error.response.status === 404) {
                msg = 'Usuario no encontrado';
            } else if (error.response.status === 500) {
                msg = 'Error del servidor, inténtelo de nuevo';
            } else {
                msg = 'Ha ocurrido un error desconocido'
            }
            throw new Error(msg)
        })
}

const deleteUser = (token, id) => {
    const request = axios.delete(`${baseURL}/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    let msg = '';
    return request.then(response => response.data
    ).catch(error => {
        if (error.response.status === 404) {
            msg = 'usuario no encontrado'
        }
        throw new Error(msg)
    })
}

const updateUser = (token, id, data) => {
    const request = axios.put(`${baseURL}/${id}`, data, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    let msg = '';
    return request.then((res) => {
        if (res.status === 200) {
            return res.data;
        }
    }
    ).catch(error => {
        if (error.response.status === 404) {
            msg = 'Usuario no encontrado';
        } else if (error.response.status === 500) {
            msg = 'Error del servidor, inténtelo de nuevo';
        } else {
            msg = 'Ha ocurrido un error desconocido'
        }
        throw new Error(msg)
    })
}



export { getUsers, getUserData, deleteUser, updateUser }