import React, {useState} from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ModalLogout = ({ setActiveUser }) => {
    
    const styles = {
        minWidth: '80px',
        fontWeight: '600',
        maxHeight: '40px',
        maxWidth: '150px'
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate();

    const handleClick = () => {
        setActiveUser(null);  
        localStorage.removeItem('token');
        navigate("/");
      }

    return (
        <>
            {/* AGREGAR VALIDACIONES!!! */}
            
            <Button className='btn btn-danger col-md-2 col-12 mt-2 mb-2 justify-content-center' style={styles} onClick={handleShow}>
                Logout
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Cerrar Sesión</Modal.Title>
                </Modal.Header>
                <Modal.Body>¿Seguro que quieres salir?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Volver
                    </Button>
                    <Button variant="danger" onClick={handleClick}>
                        Logout
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalLogout;
