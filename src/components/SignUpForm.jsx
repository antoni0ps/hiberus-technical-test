import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import { signUp } from '../services/authService'

const RegisterForm = () => {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChangeName = (event) => setName(event.target.value)
  const handleChangeSurname = (event) => setSurname(event.target.value)
  const handleChangeEmail = (event) => setEmail(event.target.value)
  const handleChangePassword = (event) => setPassword(event.target.value)

  const handleSignUp = (name, surname, email, password) => (event) => {
    event.preventDefault();
    signUp({
      name,
      surname,
      email,
      password
    })
  }

  return (
    <div className="container">
      <Form className="form" onSubmit={handleSignUp(name, surname, email, password)}>
        <div className="form-content">
          <h3 className="form-title">Regístrate</h3>
          <div className="text-center">
            ¿Ya estás registrado?{' '}
            <span className="link-primary">Inicia Sesión</span>
          </div>
          <Form.Group className="mt-3">
            <label>Nombre</label>
            <Form.Control
              onChange={handleChangeName}
              type="text"
              className="mt-1"
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <label>Apellidos</label>
            <Form.Control
              onChange={handleChangeSurname}
              type="text"
              className="mt-1"
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <label>Correo electrónico</label>
            <Form.Control
              onChange={handleChangeEmail}
              type="email"
              className="mt-1"
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <label>Contraseña</label>
            <Form.Control
              onChange={handleChangePassword}
              type="password"
              className="mt-1"
            />
          </Form.Group>

          <Button type="submit" className="btn btn-primary mb-2 mt-5 w-100">
            Registrarse
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default RegisterForm
