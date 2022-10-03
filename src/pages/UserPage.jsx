import React from 'react'
import Header from '../components/Header'
import UsersList from '../components/UsersList'

const UserPage = ({ setActiveUser, activeUser }) => {

   
    return (
        <>
            <Header  setActiveUser={setActiveUser} />
            <UsersList />
        </>
    )
}

export default UserPage