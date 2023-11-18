import React from 'react';
import iconLogo from '../../../assets/Icon/Icon.svg';
import styleFooter from './Footer.module.css';
import ButtonLink from '../butonLink/ButtonLink';
import { Instagram, Facebook, Twitter } from 'react-bootstrap-icons'

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
                        <Instagram color='#919847' size={25}/>
                        <Facebook color='#919847' size={25}/>
                        <Twitter color='#919847' size={25}/>         
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