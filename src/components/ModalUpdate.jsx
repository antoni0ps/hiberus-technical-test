import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { updateUser } from '../services/userService';
import { getUsers } from '../services/userService';

const ModalUpdate = ({ id, name, surname, email, setUsers }) => {

    const [show, setShow] = useState(false);
    const [newName, setNewName] = useState('');
    const [newSurname, setNewSurname] = useState('');
    const [newEmail, setNewEmail] = useState('');

    const handleChangeName = (event) => {
        event.preventDefault();
        setNewName(event.target.value);

    }
    const handleChangeSurname = (event) => {
        event.preventDefault();
        setNewSurname(event.target.value);

    }
    const handleChangeEmail = (event) => {
        event.preventDefault();
        setNewEmail(event.target.value)

    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleUpdate = (newName, newSurname, newEmail) => (event) => {
        event.preventDefault();
        updateUser(id, {
            name: newName,
            surname: newSurname,
            email: newEmail,
        }).then(() => {
            getUsers().then(({ items }) => {
                setUsers(items)
            })
            handleClose();
        })
    }

    return (
        <>
            {/* AGREGAR VALIDACIONES!!!!!!!!! */}

            <i className="bi bi-pencil" onClick={handleShow}></i>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modificar Usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleUpdate(newName,newSurname, newEmail)}>
                        <Form.Group className="mb-3" >
                            <Form.Label>Escribe un nuevo nombre</Form.Label>
                            <Form.Control
                                defaultValue={name}
                                onChange={handleChangeName}
                                type="text"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Escribe un nuevo apellido</Form.Label>
                            <Form.Control
                                defaultValue={surname}
                                onChange={handleChangeSurname}
                                type="text"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Escribe un nuevo email</Form.Label>
                            <Form.Control
                                defaultValue={email}
                                onChange={handleChangeEmail}
                                type="email"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Button variant="secondary" onClick={handleClose}>
                                Cancelar
                            </Button>
                            <Button type='submit' variant="primary">
                                Guardar
                            </Button>

                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalUpdate;
