import React from 'react'
import logoIcon from '../../../assets/Icon/Icon.svg';
import styleNavBar from './Navbar.module.css';
import BottonTonggler from '../../specific/BottonTonggler/BottonTonggler';
import ButtonLink from '../butonLink/ButtonLink';
import Dropdown from '../dropdown/Dropdown';

const NavBar = () => {

    const { logoIconStyle } = styleNavBar;

    return (
        <nav className="navbar navbar-expand-lg fixed-top bg-dark bg-gradient">

            <div className="container-fluid">
                <img src={logoIcon} alt="logoIcon" id={logoIconStyle} />
                <BottonTonggler />
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav ">
                        <ButtonLink Text={'Home'} link={'/'}/>
                        <ButtonLink Text={'Canchas'} link={'/productos'}/>
                        <ButtonLink Text={'Productos'} link={'/canchas'}/>
                        <ButtonLink Text={'Galeria'} link={'/galeria'}/>
                        <div className="dropdown my-auto bg-secundary">
                            <Dropdown text={'Mas'} dataBS={'dropdown'}/>
                            <ul className="dropdown-menu bg-dark bg-gradient">
                                <ButtonLink Text={'Sobre Nosotros'} link={'/about'}/>
                                <ButtonLink Text={'Contacto'} link={'/contactos'}/>
                            </ul>
                        </div>
                    </ul>
                </div>
                <button className='btn btn-success'>Iniciar Sesion</button>
            </div>
        </nav>
    )
}

export default NavBar;