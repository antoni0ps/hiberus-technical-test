import React, { useState, useEffect } from 'react'
import { getUsers } from '../services/userService.js';
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import UserCard from './UserCard.jsx';

const UsersList = () => {

  const [users, setUsers] = useState([]);
  
  const getData = async () => {
    const {items} = await getUsers()
    console.log(items);
    
    return items;
    
  }

  useEffect(() => {
    // getUsers().then(({ items }) => {
    //   setUsers(items);
    //   })
    getData().then(items => setUsers(items))
  }, []);



  return (
    
        <div className='justify-content-center'>
          {users.map(user => (
        
            <UserCard
              key={user.id}
              name={user.name}
              surname={user.surname}
              email={user.email}
              />
          ))}
        </div>
    
  )
}

export default UsersList