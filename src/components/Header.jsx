import React, {useState, useEffect} from 'react';
import LogoutButton from './LogoutButton';
import { getUserData } from '../services/userService';

const Header = ({ setActiveUser }) => {

    const [userEmail, setUserEmail] = useState('');

    const activeUserData = async () => {
        const  {email}  = await getUserData()
        return email;
    }
    
    useEffect(() => {
        activeUserData().then(email => setUserEmail(email));
    }, []);



    return (
        <div className='row justify-content-center'>
            <h1 className='col-6 mt-2'>Listado de usuarios</h1>
            <p className='col-3 mt-4'>Sesión iniciada como: { `${userEmail}` }</p>
            <LogoutButton setActiveUser={setActiveUser}/>
        </div>
    );
}

export default Header;
