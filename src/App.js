import './App.css'
import LoginForm from './components/LoginForm'
import UsersList from './components/UsersList'
import SignUpForm from './components/SignUpForm'
import Router from './routes/Router'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

function App() {

  const [activeUser, setActiveUser] = useState(null)

  const number = 5464541;

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      const loggedUser = token
      setActiveUser(loggedUser)
    }
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={activeUser ? <UsersList setActiveUser={setActiveUser} /> : <LoginForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/user-list" element={<UsersList />} />
        <Route path="/signUp" element={<SignUpForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
