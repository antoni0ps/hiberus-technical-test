import React from 'react';
import Card from 'react-bootstrap/Card';
import ModalDelete from './ModalDelete';
import ModalUpdate from './ModalUpdate';

const UserCard = ({ name, surname, email, id, setUsers, activeID }) => {
    
    return (

        <Card className='row mt-2 col-7 mx-auto'>
            {activeID !== id ?
                <Card.Body className='row justify-content-center'>
                    <span className='col-md-5 col-12 mx-auto '>{`${name} ${surname}`}</span>
                    <span className='col-md-5 col-12 mx-auto'>{`${email}`}</span>
                    <span className='col-md-1 col-12'><ModalUpdate id={id} name={name} surname={surname} email={email} setUsers={setUsers} /></span>
                    <span className='col-md-1 col-12'><ModalDelete setUsers={setUsers} id={id} /></span>
                </Card.Body>
                :
                <Card.Body className='row justify-content-center'>
                    <span className='col-md-5 col-12 mx-auto '>{`${name} ${surname}`}</span>
                    <span className='col-md-4 col-12 mx-auto'>{`${email}`}</span>
                    <span className='col-md-2 col-12'><small className='text-success '>Usuario Activo</small></span>
                    <span className='col-md-1 col-12'><ModalUpdate id={id} name={name} surname={surname} email={email} setUsers={setUsers} /></span>
                </Card.Body>}
        </Card>
    );
}

export default UserCard;
