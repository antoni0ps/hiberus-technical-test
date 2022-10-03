import React, { useState, useEffect } from 'react'
import { getUsers } from '../services/userService.js';
import UserCard from './UserCard.jsx';

const UsersList = () => {

  const [users, setUsers] = useState([]);
  
  const getData = async () => {
    const {items} = await getUsers()
    return items;

  }

  useEffect(() => {
    getData().then(items => setUsers(items))
  }, [setUsers]);


  return (
    
        <div className='justify-content-center'>
          {users.map(user => (
        
            <UserCard
              key={user.id}
              name={user.name}
              surname={user.surname}
              email={user.email}
              id={user.id}
              password={user.password}
              setUsers={setUsers}
              />
          ))}
        </div>
    
  )
}

export default UsersList