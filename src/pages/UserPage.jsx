import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import UsersList from '../components/UsersList'

const UserPage = ({ setActiveUser, activeUser, users, setUsers }) => {

    return (
        <>
            <Header setActiveUser={setActiveUser} activeUser={activeUser} />
            {users && <UsersList users={users} setUsers={setUsers} activeUser={activeUser} />}
            <Footer />
        </>
    )
}

export default UserPage