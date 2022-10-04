import React, { useState } from 'react'
import { login } from '../services/authService'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'

const LoginForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => setEmail(event.target.value)
  const handlePasswordChange = (event) => setPassword(event.target.value)

  const handleLogin = (email, password) => (event) => {
    event.preventDefault()
    login({
      email: email,
      password: password,
    }).then((res) => {
      localStorage.setItem('token', res.accessToken);
      window.location.reload()
    }).catch(error => {
      toast.error(error.message)
    })
  }


  return (
    <div>
      <div><Toaster
        position='top-center' />
      </div>
      <div className="container">
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
