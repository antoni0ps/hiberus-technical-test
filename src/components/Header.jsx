import React, {useState, useEffect} from 'react';
import { getUserData } from '../services/userService';
import ModalLogout from './ModalLogout';

const Header = ({ setActiveUser }) => {

    const [userEmail, setUserEmail] = useState('');

    const activeUserEmail = async () => {
        const  {email}  = await getUserData()
        return email;
    }
    
    useEffect(() => {
        activeUserEmail().then(email => setUserEmail(email));
    }, []);

    
    return (
        <div className='row justify-content-center'>
            <h1 className='col-6 mt-2'>Listado de usuarios</h1>
            <p className='col-3 mt-4'>Sesión iniciada como: { `${userEmail}` }</p>
            <ModalLogout setActiveUser={setActiveUser}/>
        </div>
    );
}

export default Header;
