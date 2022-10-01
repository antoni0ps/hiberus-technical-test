import React, { useState, useEffect } from 'react'
import { login } from '../services/authService'
import { Form, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import SignUpForm from './SignUpForm'

const LoginForm = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate();

  const handleEmailChange = (event) => setEmail(event.target.value)
  const handlePasswordChange = (event) => setPassword(event.target.value)

  // useEffect(() => {
  //   localStorage.clear();
  // }, []);

  // const handleLogin = (email, password) => async (event) => {
  //   event.preventDefault()
  //   const res = await authService.login({ email, password });

  //   const token = res.accessToken;
  //   localStorage.setItem('token', token);

  //   console.log(res);

  // }

  const handleLogin = (email, password) => (event) => {
    event.preventDefault()
    login({
      email: email,
      password: password,
    }).then((res) => {
      localStorage.setItem('token', res.accessToken)
      const accessToken = localStorage.getItem('token')
      navigate('/user-list')
      console.log(accessToken)
    })
  }

  return (
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
              placeholder=""
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <label>Contraseña</label>
            <Form.Control
              onChange={handlePasswordChange}
              type="password"
              className="mt-1"
              placeholder=""
            />
          </Form.Group>

            <Button type="submit" onClick={handleLogin} className="btn btn-primary mb-2 mt-5 w-100">
              Iniciar Sesión
            </Button>
          
        </div>
      </Form>
    </div>
  )
}

export default LoginForm
