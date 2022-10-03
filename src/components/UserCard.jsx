import React, {useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import ModalDelete from './ModalDelete';
import ModalUpdate from './ModalUpdate';


const UserCard = ({ name, surname, email, id, setUsers, activeID }) => {
    
    return (

        <Card className='row mt-2 col-7 mx-auto'>
            {activeID !== id ?
                <Card.Body className='row justify-content-center'>
                    <span className='col-4 mx-auto '>{`${name} ${surname}`}</span>
                    <span className='col-4 mx-auto'>{`${email}`}</span>
                    <span className='col-1'><ModalUpdate id={id} name={name} surname={surname} email={email} setUsers={setUsers} /></span>
                    <span className='col-1'><ModalDelete setUsers={setUsers} id={id} /></span>
                </Card.Body>
                :
                <Card.Body className='row justify-content-center'>
                    <span className='col-4 mx-auto '>{`${name} ${surname}`}</span>
                    <span className='col-4 mx-auto'>{`${email}`}</span>
                    <span className='col-2'><mark className='text-success '>Usuario Activo</mark></span>
                </Card.Body>}
        </Card>
    );
}

export default UserCard;
