import React from 'react';
import LogoutButton from './LogoutButton';

const Header = ({setActiveUser}) => {

    return (
        <div className='row justify-content-center'>
            <h1 className='col-9 mt-2'>Listado de usuarios</h1>
            <LogoutButton setActiveUser={setActiveUser}/>
        </div>
    );
}

export default Header;
