// import React from 'react'
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
// import LoginPage from '../pages/LoginPage'
// import SignUpPage from '../pages/SignUpPage'
// import UserPage from '../pages/UserPage'

// const Router = ({ activeUser, setActiveUser, users, setUsers }) => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={activeUser ? <Navigate replace to="/user-list" /> : <LoginPage activeUser={activeUser} setActiveUser={setActiveUser} users={users} setUsers={setUsers} />} />
//         <Route path="/user-list" element={<UserPage setActiveUser={setActiveUser} activeUser={activeUser} users={users} setUsers={setUsers} />} />
//         <Route path="/signUp" element={<SignUpPage />} />
//         <Route path="*" element=<Navigate replace to="/" /> />
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default Router
