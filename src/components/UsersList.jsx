import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useTokenContext } from '../context/UserContext.jsx';
import {  getUsers } from '../services/userService.js';
import UserCard from './UserCard.jsx';

const UsersList = ({users, setUsers, activeUser}) => {

  const { tokenContext, loggedUser } = useTokenContext()
  const navigate = useNavigate();
  
  useEffect(() => {
    
    if (tokenContext) {
      getUsers(tokenContext).then(data => {
        return data
      }).then((data) => {
        setUsers(data.items)
      })
    } else {
      navigate("/")
    }
  }, []);

        
  return (
    
        <div className='justify-content-center scroll'>
          {users.map(user => 
        
            <UserCard
              key={user.id}
              name={user.name}
              surname={user.surname}
              email={user.email}
              id={user.id}
              password={user.password}
              setUsers={setUsers}
              activeID={loggedUser.id}
              />
          )}
        </div>
    
  )
}

export default UsersList