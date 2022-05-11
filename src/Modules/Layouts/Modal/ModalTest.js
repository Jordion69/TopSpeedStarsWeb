import React from 'react'
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function ModalTest(props) {

	const [show, setShow] = useState(false);

    const handleClose = () => {
        try {
            props.close();
        } catch (e) {}

        setShow(false);
    };
    const handleShow = () => setShow(true);

  return (
	<div>
	  <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{props.children}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        {props.confirmText}
                    </Button>
                </Modal.Footer>
            </Modal>
	</div>
  )
}
