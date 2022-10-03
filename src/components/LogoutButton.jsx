import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';



const LogoutButton = ({setActiveUser}) => {

    const styles = {
        minWidth: '80px',
        fontWeight: '600',
    }
    
    const navigate = useNavigate();


    const handleClick = () => {
        setActiveUser(null);  
        localStorage.removeItem('token');
        navigate("/");
      }


    return (
        <Button className='btn btn-danger col-1 m-2 justify-content-center' style={styles} onClick={handleClick}>
            Logout
        </Button>
    );
}

export default LogoutButton;
