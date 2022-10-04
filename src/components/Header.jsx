import React, {useState, useEffect} from 'react';
import { useTokenContext } from '../context/UserContext';
import { getUserData } from '../services/userService';
import ModalLogout from './ModalLogout';

const Header = ({ setActiveUser, activeUser }) => {
    
    const style = {
        backgroundColor: "#153962",
        color: "white",
    }

    const [userEmail, setUserEmail] = useState('');
    const { tokenContext, setTokenContext } = useTokenContext()

    
    useEffect(() => {
        getUserData(tokenContext).then(data => {
                setUserEmail(data.email)
            })
    }, []);

    
    return (
        <div className='row d-flex align-items-center justify-content-center' style={style}>
            <h2 className='col-md-3 col-12 mt-2 text-center'>Listado de usuarios</h2>
            <p className='col-md-6 col-12 mt-4 text-center'>Sesión iniciada como: { `${userEmail}` }</p>
            <ModalLogout setActiveUser={setActiveUser}/>
        </div>

    );
}

export default Header;
