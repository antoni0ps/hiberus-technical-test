import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LoginForm from '../components/LoginForm'
import UsersList from '../components/UsersList'
import SignUpForm from '../components/SignUpForm'

const Router = ({activeUser, setActiveUser}) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={activeUser ? <Navigate replace to="/user-list"/> : <LoginForm />} />
        <Route path="/user-list" element={<UsersList setActiveUser={setActiveUser}/>} />
        <Route path="/signUp" element={<SignUpForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
