import axios from 'axios'

const loginURL = 'http://51.38.51.187:5050/api/v1/auth/log-in'
const signUpURL = 'http://51.38.51.187:5050/api/v1/auth/sign-up'

// const login =  (credentials) => {
//      axios.post(loginURL, credentials)
//     .then(({ data }) => {
//       console.log(data.accessToken)
//       return data
//     })
//     .catch((error) => {
//       if (error.response.status === 404) {
//         alert('Usuario o contraseña incorrectos')
//       } else if (error.response.status === 601) {
//         alert('El usuario no está validado')
//       }
//     })
// }

const login = (credentials) => {
  const request = axios.post(loginURL, credentials)
  return request
    .then((response) => response.data)
    .catch((error) => {
      if (error.response.status === 404) {
        alert('Usuario o contraseña incorrectos')
      } else if (error.response.status === 601) {
        alert('El usuario no está validado')
      }
    })
}

// const login = async (credentials) => {
//   const response = await axios.post(loginURL, credentials)
//   return response.data;
// }

const signUp = (credentials) => {
  const request = axios.post(signUpURL, credentials)
  return request
    .then(({ data }) => data)
    .catch((error) => {
      if (error.response.status === 409) {
        alert('El email ya existe')
      } else {
        alert('Ha ocurrido un error')
      }
    })
}

export { login, signUp }
