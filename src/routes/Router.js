import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LoginForm from '../components/LoginForm'
import SignUpForm from '../components/SignUpForm'
import UserPage from '../pages/UserPage'

const Router = ({ activeUser, setActiveUser }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={activeUser ? <Navigate replace to="/user-list" /> : <LoginForm activeUser={activeUser} setActiveUser={setActiveUser} />} />
        <Route path="/user-list" element={<UserPage setActiveUser={setActiveUser} activeUser={activeUser} />} />
        <Route path="/signUp" element={<SignUpForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
