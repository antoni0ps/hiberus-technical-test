import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const UserCard = ({ name, surname, email, id }) => {
    


    return (
        <Card className='row mt-2 col-8 justify-content-center'>
            <Card.Body className='row justify-content-center'>
                
                <span className='col-4 '>{`${name} ${surname}`}</span>
                <span className='col-4'>{`${email}`}</span>
                <span className='col-1'>
                    <Button>Editar</Button>
                    
                </span>
                <span className='m-0 ml-2 col-1'>
                    <Button className='btn btn-danger'>Eliminar</Button>
                </span>
            </Card.Body>
        </Card>
    );
}

export default UserCard;
