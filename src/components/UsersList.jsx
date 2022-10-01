import React, { useState, useEffect } from 'react'
import { getUsers } from '../services/userService.js';
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const UsersList = ({ setActiveUser }) => {

  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const handleClick = () => {
    setActiveUser(null);  
    localStorage.removeItem('token');
    navigate("/");
  }

  useEffect(() => {

    const printUsers = async () => {
      const { items } = await getUsers();
      setUsers(items);
    }

    printUsers()

  }, []);



  return (
    <div>
      <h1>Lista de usuarios</h1>

      <ul>
        {users.map(user => (
          <li key={user.id}> {user.name} </li>
        ))}
      </ul>


      <Button onClick={handleClick}>
        Logout
      </Button>
    </div>
  )
}

export default UsersList