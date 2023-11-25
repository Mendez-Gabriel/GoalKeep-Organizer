import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoIcon from '../../../assets/Icon/Icon.svg';
import styleNavBar from './NavBar.module.css';
import BottonTonggler from '../../specific/bottonTonggler/BottonTonggler';
import ButtonLink from '../butonLink/ButtonLink';
import Dropdown from '../dropdown/Dropdown';
import { House, Flag, Shop, CardImage, InfoCircle, Phone, PersonFill } from 'react-bootstrap-icons';
import Offcanvas from 'react-bootstrap/Offcanvas'
import ModalM from '../modal/ModalM';
import Button from 'react-bootstrap/Button';



const NavBar = ({ setUser, user }) => {

    const { logoIconStyle, navicon, open } = styleNavBar;
    const containerIcon = 'container d-flex p-2'

    const [show, setShow] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [tonggler, setTonggler] = useState()

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
        setTonggler(true)
    }


    const handleShow = () => setShow(true);
    const handleClose = () => {
        setShow(false)
        setMenuOpen(false)
        setTonggler(false)
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        setShow(false);
        setUser(null);
    };


    return (
        <header>
            <Offcanvas show={menuOpen} onHide={handleClose} responsive="lg" className='bg-dark d-lg-none'>
                <Offcanvas.Header closeButton>
                    <div className={containerIcon}>
                        <img src={logoIcon} alt="logoIcon" id={logoIconStyle} />
                        <ul className='navbar-nav'>
                            <ButtonLink Text={user?.loginUser.userPasswordHidden.userName} link={'/login'} className={'fs-3'} />
                        </ul>
                    </div>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className={containerIcon}>
                        <House color='#919847' size={30} />
                        <ButtonLink Text={'Home'} link={'/'} click={() => handleShowCanvas(showCanvas)} />
                    </div>
                    <div className={containerIcon}>
                        <Flag color='#919847' size={30} />
                        <ButtonLink Text={'Canchas'} link={'/canchas'} click={() => handleShowCanvas(showCanvas)} />
                    </div>
                    <div className={containerIcon}>
                        <Shop color='#919847' size={30} />
                        <ButtonLink Text={'Productos'} link={'/products'} click={() => handleShowCanvas(showCanvas)} />
                    </div>
                    <div className={containerIcon}>
                        <CardImage color='#919847' size={30} />
                        <ButtonLink Text={'Galeria'} link={'/galeria'} click={() => handleShowCanvas(showCanvas)} />
                    </div>
                    {user?.loginUser.userPasswordHidden.admin ?
                        (
                            <div className={containerIcon}>
                                <PersonFill color='#919847' size={30} />
                                <ButtonLink Text={'Administrador'} link={'/admin'} click={() => handleShowCanvas(showCanvas)} />
                            </div>
                        ) : ('')
                    }

                    <div className={containerIcon}>
                        <InfoCircle color='#919847' size={30} />
                        <ButtonLink Text={'Sobre Nosotros'} link={'/about'} click={() => handleShowCanvas(showCanvas)} />
                    </div>
                    <div className={containerIcon}>
                        <Phone color='#919847' size={30} />
                        <ButtonLink Text={'Contacto'} link={'/contactos'} click={() => handleShowCanvas(showCanvas)} />
                    </div>
                    <div className='mt-5'>
                        {user ?
                            (<Button variant="danger" onClick={handleShow}>Cerrar Sesion</Button>)
                            :
                            (<div className="btn-group me-2" role="group" aria-label="Second group">
                                <Link to={'/user/login'} className='btn btn-success'>Inicia Sesion</Link>
                                <Link to={'user/register'} className='btn btn-warning'>Registrate</Link>
                            </div>)}
                        <ModalM show={show} onClickCancel={handleClose} onClickClose={handleLogout} onHide={handleClose} />
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
            <nav className="navbar navbar-expand-lg fixed-top bg-dark">
                <div className="container-fluid">
                    <img src={logoIcon} alt="logoIcon" id={logoIconStyle} />
                    <Button variant="" className={`d-lg-none ${navicon} ${tonggler ? open : ''}`} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </Button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav ">
                            <ButtonLink Text={'Home'} link={'/'} />
                            <ButtonLink Text={'Canchas'} link={'/canchas'} />
                            <ButtonLink Text={'Productos'} link={'/products'} />
                            <ButtonLink Text={'Galeria'} link={'/galeria'} />
                            {user?.loginUser.userPasswordHidden.admin ?
                                (
                                    <ButtonLink Text={'Administracion'} link={'/admin'} />
                                ) : ('')
                            }
                            <div className="dropdown my-auto">
                                <Dropdown text={'Mas'} dropdownStyle={'text-light'} />
                                <ul className="dropdown-menu bg-dark bg-gradient">
                                    <ButtonLink Text={'Sobre Nosotros'} link={'/about'} />
                                    <ButtonLink Text={'Contacto'} link={'/contact'} />
                                </ul>
                            </div>
                        </ul>
                    </div>
                    <div className='d-none d-lg-block'>
                        {user ?
                            (<Button variant="danger" onClick={handleShow}>Cerrar Sesion</Button>)
                            :
                            (<div className="btn-group me-2" role="group" aria-label="Second group">
                                <Link to={'/user/login'} className='btn btn-success'>Inicia Sesion</Link>
                                <Link to={'user/register'} className='btn btn-warning'>Registrate</Link>
                            </div>)}
                        <ModalM show={show} onClickCancel={handleClose} onClickClose={handleLogout} onHide={handleClose} textBtn={'Cerrar Sesion'} textTitle={'¿Seguro que deseas cerrar sesion?'} />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar;