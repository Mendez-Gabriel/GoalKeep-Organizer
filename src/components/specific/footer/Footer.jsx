import React from 'react';
import iconLogo from '../../../assets/Icon/Icon.svg';
import styleFooter from './Footer.module.css';
import ButtonLink from '../butonLink/ButtonLink';
import { Instagram, Facebook, Twitter } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom';

const Footer = () => {
    const { logoIconStyle } = styleFooter;

    return (
        <footer>
            <nav className="navbar bg-dark  justify-content-center" data-bs-theme="dark">
                <div>
                    <div className='d-flex justify-content-center'>
                        <img src={iconLogo} id={logoIconStyle} alt="" />
                        <h1 className='text-light fst-italic ms-3'>GoalKeep Organizer</h1>
                    </div>
                    <ul className="nav justify-content-center">
                        <ButtonLink link={'*'} Text={'Terminos de uso'}/>
                        <ButtonLink link={'*'} Text={'Politicas de Privacidad'}/>
                        <ButtonLink link={'/contact'} Text={'Contacto'}/>
                        <ButtonLink link={'/about'} Text={'Acerca de Nosotros'}/>
                        <ButtonLink link={'*'} Text={'Informacion Legal'}/>
                    </ul>
                    <ul className="nav justify-content-evenly m-2">
                        <a href="http://www.instagram.com"><Instagram color='#919847' size={25}/></a>
                        <a href="http://www.facebook.com"><Facebook color='#919847' size={25}/></a>
                        <a href="http://twitter.com/?lang=es"><Twitter color='#919847' size={25}/></a>                    
                    </ul>
                </div>
            </nav>
            <div className='d-flex justify-content-center bg-secondary'>
                <p className='text-info'>COPYRIGHT &copy; {new Date().getFullYear()} GoalKeep Organizer</p>
            </div>
        </footer>
    )
}

export default Footer;