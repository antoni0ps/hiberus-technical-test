import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import SignUpPage from '../pages/SignUpPage'
import UserPage from '../pages/UserPage'

const Router = ({ activeUser, setActiveUser }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={activeUser ? <Navigate replace to="/user-list" /> : <LoginPage activeUser={activeUser} setActiveUser={setActiveUser} />} />
        <Route path="/user-list" element={activeUser ? <UserPage setActiveUser={setActiveUser} activeUser={activeUser} /> : <Navigate replace to="/" />} />
        <Route path="/signUp" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
