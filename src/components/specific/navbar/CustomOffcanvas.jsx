import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import styles from './Offcanvas.module.css';

const CustomOffcanvas = ({ show, onHide, children }) => {
  return (
    <Offcanvas show={show} onHide={onHide} className={styles.offcanvas}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>¡Tu Offcanvas!</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>{children}</Offcanvas.Body>
    </Offcanvas>
  );
};

export default CustomOffcanvas;