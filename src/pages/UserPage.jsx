import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import UsersList from '../components/UsersList'

const UserPage = ({ setActiveUser, activeUser, users }) => {

    return (
        <>
            <Header setActiveUser={setActiveUser} activeUser={activeUser} />
            {users && <UsersList users={users} activeUser={activeUser} />}
            <Footer />
        </>
    )
}

export default UserPage