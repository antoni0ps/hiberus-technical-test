import React from 'react'
import Header from '../components/Header'
import UsersList from '../components/UsersList'

const UserPage = ({ setActiveUser }) => {

    return (
        <>
            <Header setActiveUser={setActiveUser}/>
            <UsersList />
        </>
    )
}

export default UserPage