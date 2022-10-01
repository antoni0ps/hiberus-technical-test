import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginForm from '../components/LoginForm'
import UsersList from '../components/UsersList'
import SignUpForm from '../components/SignUpForm'
import { BrowserRouter } from 'react-router-dom'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/user-list" element={<UsersList />} />
        <Route path="/signUp" element={<SignUpForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
