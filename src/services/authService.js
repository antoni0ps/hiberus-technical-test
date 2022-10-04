import axios from 'axios'
import toast from 'react-hot-toast'

const loginURL = 'http://51.38.51.187:5050/api/v1/auth/log-in'
const signUpURL = 'http://51.38.51.187:5050/api/v1/auth/sign-up'

const login = (credentials) => {
  const request = axios.post(loginURL, credentials)
  let msg = 'Error';
  return request
    .then((response) => response.data)
    .catch((error) => {
      if (error.response.status === 404) {
        toast.error('Usuario o contraseña incorrectos')
      } else if (error.response.status === 601) {
        toast.error('El usuario no está validado');
      }
      throw new Error(msg);
    })
}


const signUp = (credentials) => {
  const request = axios.post(signUpURL, credentials)
  let msg = '';
  return request
    .then(({ data }) => {
      if (data !== null) {
        return data
      }
    })
    .catch((error) => {
      if (error.response.status === 409) {
        toast.error('El email ya existe');
      } else {
        toast.error('Ha ocurrido un error desconocido')
      }
      throw new Error(msg)
    })
}

export { login, signUp }
