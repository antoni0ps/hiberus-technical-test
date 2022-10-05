import React, { useState } from 'react'
import { login } from '../services/authService'
import { Form, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { getUsers, getUserData } from '../services/userService'
import { useTokenContext } from '../context/UserContext'

const LoginForm = ({setUsers}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setTokenContext, setLoggedUser } = useTokenContext()
  
  const navigate = useNavigate()

  const handleEmailChange = (event) => setEmail(event.target.value)
  const handlePasswordChange = (event) => setPassword(event.target.value)

  const handleLogin = (email, password) => async (event) => {
    event.preventDefault();
    const response =
      await login({
        email: email,
        password: password
      })
    setTokenContext(response.accessToken)
    if (response) {
      localStorage.setItem('token', response.accessToken)
      const userList = await getUsers(response.accessToken)
      const tempUser = await getUserData(response.accessToken)
      setLoggedUser(tempUser)
      setUsers(userList.items)
      navigate("/user-list")
    } 
  }
  
  return (
    <div>
      <div><Toaster
        position='top-center' />
      </div>
      <div className="containerAuth">
        <Form className="form" onSubmit={handleLogin(email, password)}>
          <div className="form-content">
            <h3 className="form-title">Inicia Sesión</h3>
            <div className="text-center">
              ¿Todavía no te has registrado?{' '}
              <Link to="signUp">
                <span className="link-primary">Hazlo Aquí</span>
              </Link>
            </div>
            <Form.Group className="mt-3">
              <label>Correo electrónico</label>
              <Form.Control
                onChange={handleEmailChange}
                type="email"
                className="mt-1"
                required
                />
            </Form.Group>
            <Form.Group className="mt-3">
              <label>Contraseña</label>
              <Form.Control
                onChange={handlePasswordChange}
                type="password"
                className="mt-1"
                required
              />
            </Form.Group>

            <Button type="submit" onClick={handleLogin} className="btn btn-primary mb-2 mt-5 w-100">
              Iniciar Sesión
            </Button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default LoginForm
