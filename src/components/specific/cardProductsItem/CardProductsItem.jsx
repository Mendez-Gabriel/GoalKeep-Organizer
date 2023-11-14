import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { SiAmericanexpress, SiVisa, SiMastercard, SiMercadopago } from 'react-icons/si';
import style from './CardProductsItems.module.css';
import ButtonGeneral from '../../general/buttonGeneral/ButtonGeneral';
import ModalM from '../modal/ModalM';
import Button from 'react-bootstrap/Button';

const CardProductsItem = ({ products, user }) => {
    
    const { name, Image, price, description } = products
    const { bgOscuroMedio, bgPhotoFutbol, bgGradiente, textGradient } = style

    const navigate = useNavigate()

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const handleLogout = () => {
        navigate('/user/login');
        setShow(false);
    };

    return (
        <div className={bgOscuroMedio}>
            <div className='container'>
                <div className={`card ${bgPhotoFutbol}`}>
                    <div className="row g-0">
                        <div className="col-md-6 ">
                            <img src={Image} className="img-fluid rounded-start" alt="..." />
                            <div className={`card border-dark my-3 ${bgGradiente}`}>
                                <div className="card-header"><h4>Descripcion del Producto</h4></div>
                                <div className="card-body ">
                                    <p className="card-text">{description}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h1 className={`card-title m-2 text-light ${textGradient}`}>{name}</h1>
                                <div className='my-5'>
                                    <p className='text-light'>Desde:</p>
                                    <h2 className={`ms-3 text-warning ${textGradient}`}>${price}</h2>
                                </div>
                                <div className="card border-warning my-4" >
                                    <div className="card-header fs-4 text">¡Aprovechá nuestras promociones bancarias!</div>
                                    <div className="card-body">
                                        <div className='d-flex my-3'>
                                            <SiVisa size={'2rem'} color='green' className='m-2' />
                                            <SiAmericanexpress size={'2rem'} color='green' className='m-2'/>
                                            <SiMastercard size={'2rem'} color='green' className='m-2'/>
                                            <SiMercadopago size={'2rem'} color='green' className='m-2'/>
                                        </div>
                                        <p className="card-text fs-6 text">3 cuotas fijas de <span className='text-warning'>${(price / 3).toFixed(2)}</span></p>
                                        <p className="card-text fs-6 text">6 cuotas fijas de <span className='text-warning'>${(price / 6).toFixed(2)}</span></p>
                                        <p className="card-text fs-6 text">12 cuotas fijas de <span className='text-warning'>${(price / 12).toFixed(2)}</span></p>
                                    </div>
                                </div>
                                {user ? 
                                    user?.loginUser.userPasswordHidden.active ?
                                        <Link to={'*'} className='btn btn-success' >Agregar al Carrito</Link> 
                                        :
                                        <>
                                            <Button variant="success" onClick={handleShow}>Agregar al Carrito</Button>
                                            <ModalM show={show} onClickCancel={handleClose} onClickClose={handleLogout} onHide={handleClose} textBtn={'Iniciar Sesion'} textTitle={'Su cuenta fue Inabilitada por el administrador'}/>
                                        </>                                
                                    :                                  
                                        <>
                                            <Button variant="success" onClick={handleShow}>Agregar al Carrito</Button>
                                            <ModalM show={show} onClickCancel={handleClose} onClickClose={handleLogout} onHide={handleClose} textBtn={'Iniciar Sesion'} textTitle={'Necesitas iniciar sesion para continuar'}/>
                                        </>
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardProductsItem;