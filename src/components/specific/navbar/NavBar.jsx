import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logoIcon from '../../../assets/Icon/Icon.svg';
import styleNavBar from './Navbar.module.css';
import BottonTonggler from '../../specific/BottonTonggler/BottonTonggler';
import ButtonLink from '../butonLink/ButtonLink';
import Dropdown from '../dropdown/Dropdown';
import { House, Flag, Shop, CardImage, InfoCircle, Phone } from 'react-bootstrap-icons';
import ModalM from '../modal/ModalM';
import Button from 'react-bootstrap/Button';
import login from '../login/Login';



const NavBar = ({ setUser, user }) => {

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const handleLogout = () => {
        localStorage.removeItem('user');
        setShow(false);
        setUser(null);
    };

    const { logoIconStyle } = styleNavBar;
    const conteinerIcon = 'd-flex align-items-center my-2';

    return (
        <header>
            <nav className="navbar navbar-expand-lg fixed-top bg-dark bg-gradient">
                <div className="container-fluid">
                    <img src={logoIcon} alt="logoIcon" id={logoIconStyle} />
                    <BottonTonggler
                        offcanvasHeader={
                            <>
                                <div className={conteinerIcon}>
                                    <img src={logoIcon} alt="logoIcon" id={logoIconStyle} />
                                    <ul className='navbar-nav'>
                                        <ButtonLink Text={'user.loginUser.userPasswordHidden.userName'} link={'/login'} className={'fs-3'} />
                                    </ul>
                                </div>
                            </>
                        }
                        offcanvas={
                            <>
                                <div className={conteinerIcon}>
                                    <House color='#919847' size={30} />
                                    <ButtonLink Text={'Home'} link={'/'} />
                                </div>
                                <div className={conteinerIcon}>
                                    <Flag color='#919847' size={30} />
                                    <ButtonLink Text={'Canchas'} link={'/fields'} />
                                </div>
                                <div className={conteinerIcon}>
                                    <Shop color='#919847' size={30} />
                                    <ButtonLink Text={'Productos'} link={'/products'} />
                                </div>
                                <div className={conteinerIcon}>
                                    <CardImage color='#919847' size={30} />
                                    <ButtonLink Text={'Galeria'} link={'/galeria'} />
                                </div>
                                <div className={conteinerIcon}>
                                    <InfoCircle color='#919847' size={30} />
                                    <ButtonLink Text={'Sobre Nosotros'} link={'/about'} />
                                </div>
                                <div className={conteinerIcon}>
                                    <Phone color='#919847' size={30} />
                                    <ButtonLink Text={'Contacto'} link={'/contactos'} />
                                </div>
                                <div className='mt-5'>
                                    <Button variant="danger" onClick={handleShow}>Cerrar Sesion</Button>
                                    <ModalM show={show} onClickCancel={handleClose} onClickClose={handleLogout} onHide={handleClose} />
                                </div>
                            </>
                        }
                    />
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav ">
                            <ButtonLink Text={'Home'} link={'/'} />
                            <ButtonLink Text={'Canchas'} link={'/fields'} />
                            <ButtonLink Text={'Productos'} link={'/products'} />
                            <ButtonLink Text={'Galeria'} link={'/galery'} />
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
                        <ModalM show={show} onClickCancel={handleClose} onClickClose={handleLogout} onHide={handleClose} />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar;