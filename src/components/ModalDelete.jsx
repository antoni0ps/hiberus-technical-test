import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';
import { deleteUser, getUsers } from '../services/userService';

const ModalDelete = ({ id, setUsers }) => {

    const styleRed = {
        fontSize: "1.2em",
        color: "tomato"
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = async () => {
        try {
            await deleteUser(id);
            const { items } = await getUsers();
            setUsers(items)
            handleClose()    
        } catch (error) {
            toast.error(error.message);
        }
    }

    return (
        <>
            <div>
                <Toaster 
                    position='top-center'
                />
            </div>
            <i onClick={handleShow} style={styleRed} className="bi bi-trash3"></i>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Eliminar Usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>¿Estás seguro/a de que quieres borrar este usuario?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={handleDelete}>
                        Eliminar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDelete;
