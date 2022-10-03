import React, { useState, useEffect } from 'react'
import { getUsers, getUserData } from '../services/userService.js';
import UserCard from './UserCard.jsx';

const UsersList = () => {

  const [users, setUsers] = useState([]);
  const [activeID, setActiveID] = useState('');
  
  const getData = async () => {
    const {items} = await getUsers()
    return items;
  }

  const activeUserID = async () => {
    const { id } = await getUserData()
    setActiveID(id)
    return id;
  }

  useEffect(() => {
    getData().then(items => {
      setUsers(items)
      activeUserID()
    })
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
              activeID={activeID}
              />
          ))}
        </div>
    
  )
}

export default UsersList