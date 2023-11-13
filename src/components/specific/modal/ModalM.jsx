import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



const ModalM = ({ show, onHide, onClickCancel, onClickClose, textTitle, textBtn }) => {
   
    

    return (
        <>
            <Modal size="sm" show={show} onHide={onHide}>
                <Modal.Header>
                    <Modal.Title>{textTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onClickCancel}>Cancelar</Button>
                    <Button variant="danger" onClick={onClickClose}>{textBtn}</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalM;