import './App.css'
import { useState} from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import UserPage from './pages/UserPage'
import SignUpPage from "./pages/SignUpPage"
import LoginPage from "./pages/LoginPage"
import { UserContextProvider } from './context/UserContext'

function App() {

  const [activeUser, setActiveUser] = useState(null)
  const [users, setUsers] = useState([]);

  return (
    <div className='overflow-hidden'>
      <UserContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={activeUser ? <Navigate replace to="/user-list" /> : <LoginPage activeUser={activeUser} setActiveUser={setActiveUser} users={users} setUsers={setUsers} />} />
            <Route path="/user-list" element={<UserPage setActiveUser={setActiveUser} activeUser={activeUser} users={users} setUsers={setUsers} />} />
            <Route path="/signUp" element={<SignUpPage />} />
            <Route path="*" element=<Navigate replace to="/" /> />
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </div>
  )
}

export default App
