import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';
import { updateUser, getUsers } from '../services/userService';

const ModalUpdate = ({ id, name, surname, email, setUsers }) => {

    const styleGreen = {
        fontSize: "1.2em",
        color: "darkGreen"
    }

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
                toast.success("Usuario editado con éxito")
                handleClose();
            }).catch(error => {
                toast.error(error.message)
            })
        })
    }

    return (
        <>
            <div>
                <Toaster 
                    position='top-center'
                />
            </div>
            <i className="bi bi-pencil" style={styleGreen} onClick={handleShow}></i>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modificar Usuario</Modal.Title>
                </Modal.Header>
                    <span className='mx-auto mt-2'>{`${name} ${surname} | ${email}`}</span>
                <Modal.Body>
                    <Form onSubmit={handleUpdate(newName,newSurname, newEmail)}>
                        <Form.Group className="mb-3" >
                            <Form.Label>Nuevo nombre</Form.Label>
                            <Form.Control
                                onChange={handleChangeName}
                                type="text"
                                autoFocus
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Nuevo apellido</Form.Label>
                            <Form.Control
                                onChange={handleChangeSurname}
                                type="text"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Nuevo email</Form.Label>
                            <Form.Control
                                onChange={handleChangeEmail}
                                type="email"
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Cancelar
                            </Button>
                            <Button type='submit' variant="primary">
                                Guardar
                            </Button>
                        </Modal.Footer>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalUpdate;
