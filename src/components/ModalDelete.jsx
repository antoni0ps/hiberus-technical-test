import React, {useState} from 'react';
import { Button, Modal } from 'react-bootstrap';
import { deleteUser, getUsers } from '../services/userService';




const ModalDelete = ({id, setUsers}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = async () => {
        await deleteUser(id);
        const { items } = await getUsers();
        setUsers(items)
        handleClose();
    }

    return (
        <>
            {/* AGREGAR VALIDACIONES!!! */}
            <i onClick={handleShow} className="bi bi-trash3"></i>

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
