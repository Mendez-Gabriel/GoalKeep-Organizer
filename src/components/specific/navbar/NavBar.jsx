import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoIcon from '../../../assets/Icon/Icon.svg';
import styleNavBar from './NavBar.module.css';
import ButtonLink from '../butonLink/ButtonLink';
import Dropdown from '../dropdown/Dropdown';
import { House, Flag, Shop, CardImage, InfoCircle, Phone, PersonFill } from 'react-bootstrap-icons';
import ModalM from '../modal/ModalM';
import Button from 'react-bootstrap/Button';




const NavBar = ({ setUser, user }) => {

    const { logoIconStyle, navicon, open, shows, offcanvas, index, zindex } = styleNavBar;
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

    const actived = user?.loginUser?.userPasswordHidden?.active
        ;

    return (
        <header>
            <div className={`${offcanvas} bg-dark my-3 offcanvas-start d-lg-none ${menuOpen ? shows : ''} ${index}`} id="offcanvas" aria-labelledby="offcanvasLabel">
                <div className="offcanvas-header">
                    <div className={containerIcon}>
                        <ul className='navbar-nav'>
                            <ButtonLink Text={user?.loginUser.userPasswordHidden.userName} link={'/login'} className={'fs-3'} />
                        </ul>
                    </div>
                    <div className=' bg-secondary bg-gradient m-2'>
                        <button type="button" className="btn-close m-2" data-bs-dismiss="offcanvas" aria-label="Close" onClick={handleClose}></button>
                    </div>
                </div>
                <div className="offcanvas-body">
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
                        <ButtonLink Text={'Contacto'} link={'/contact'} click={() => handleShowCanvas(showCanvas)} />
                    </div>
                    <div className='mt-5'>
                        {user ?
                            (<Button variant="danger" className='m-3' onClick={handleShow}>Cerrar Sesion</Button>)
                            :
                            (<div className="btn-group me-2" role="group" aria-label="Second group">
                                <Link to={'/user/login'} className='btn btn-success' onClick={() => handleShowCanvas(showCanvas)}>Inicia Sesion</Link>
                                <Link to={'user/register'} className='btn btn-warning' onClick={() => handleShowCanvas(showCanvas)}>Registrate</Link>
                            </div>)}
                        <ModalM show={show} onClickCancel={handleClose} onClickClose={handleLogout} onHide={handleClose} />
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg fixed-top bg-dark">
                <div className="container-fluid">
                    <img src={logoIcon} alt="logoIcon" id={logoIconStyle} />
                    <Button variant="" className={`d-lg-none ${navicon} ${menuOpen ? open : ''}`} onClick={toggleMenu}>
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
                        {actived ?
                            (<Button variant="danger" onClick={handleShow}>Cerrar Sesion</Button>)
                            :
                            (<div className="btn-group me-2" role="group" aria-label="Second group">
                                <Link to={'/user/login'} className='btn btn-success'>Inicia Sesion</Link>
                                <Link to={'user/register'} className='btn btn-warning'>Registrate</Link>
                            </div>)}
                        <div className={zindex}>
                            <ModalM show={show} onClickCancel={handleClose} onClickClose={handleLogout} onHide={handleClose} textBtn={'Cerrar Sesion'} textTitle={'¿Seguro que deseas cerrar sesion?'} />
                        </div>
                    </div>
                    
                </div>
            </nav>
        </header>
    )
}

export default NavBar;