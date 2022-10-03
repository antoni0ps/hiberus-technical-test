import './App.css'
import Router from './routes/Router'
import { useState, useEffect } from 'react'

function App() {

  const [activeUser, setActiveUser] = useState(null)


  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      const loggedUser = token
      setActiveUser(loggedUser)
    }
  }, [])

  return (
    <>
      <Router activeUser={activeUser} setActiveUser={setActiveUser} />
    </>
  )
}

export default App
