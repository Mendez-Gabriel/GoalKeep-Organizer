import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { SiAmericanexpress, SiVisa, SiMastercard, SiMercadopago } from 'react-icons/si';
import { textGradient, image, createButton, accordionTransition } from './CardProductsItem.module.css';
import ModalM from '../modal/ModalM';
import Button from 'react-bootstrap/Button';

const CardProductsItem = ({ products, user }) => {

    const { name, Image, price, description } = products;
    console.log(createButton)

    const navigate = useNavigate()

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const handleLogout = () => {
        navigate('/user/login');
        setShow(false);
    };

    return (

        <div className='container'>
            <div className="row">
                <div className="col-lg-6">
                    <img src={Image} className={image} alt="..." />
                </div>
                <div className='col-lg-6'>
                    <h1 className={`card-title m-2 ${textGradient}`}>{name}</h1>
                    <div className=''>
                        <p className='m-2'>Desde:</p>
                        <h2 className={`ms-3`}>${price}</h2>
                    </div>
                    <div className="card-header fs-4 text mt-4 mx-2">¡Aprovechá nuestras promociones bancarias!</div>
                    <div className="card-body">
                        <div className='d-flex my-3'>
                            <SiVisa size={'2rem'} color='green' className='m-2' />
                            <SiAmericanexpress size={'2rem'} color='green' className='m-2' />
                            <SiMastercard size={'2rem'} color='green' className='m-2' />
                            <SiMercadopago size={'2rem'} color='green' className='m-2' />
                        </div>
                        <div className='mx-2'>
                            <p className="card-text fs-6 text">3 cuotas fijas de <span className='text-warning'>${(price / 3).toFixed(2)}</span></p>
                            <p className="card-text fs-6 text">6 cuotas fijas de <span className='text-warning'>${(price / 6).toFixed(2)}</span></p>
                            <p className="card-text fs-6 text">12 cuotas fijas de <span className='text-warning'>${(price / 12).toFixed(2)}</span></p>
                        </div>
                    </div>
                    {user ?
                        user?.loginUser.userPasswordHidden.active ?
                            <Link to={'*'} className='btn btn-success' ></Link>
                            :
                            <>
                                <Button variant="success" className='vw-100 m-3 rounded-pill' onClick={handleShow}>Agregar al Carrito</Button>
                                <ModalM show={show} onClickCancel={handleClose} onClickClose={handleLogout} onHide={handleClose} textBtn={'Iniciar Sesion'} textTitle={'Su cuenta fue Inabilitada por el administrador'} />
                            </>
                        :
                        <>
                            <button  className={` m-2 mt-5 rounded-pill ${createButton}`} onClick={handleShow}>Agregar al Carrito</button>
                            <ModalM show={show} onClickCancel={handleClose} onClickClose={handleLogout} onHide={handleClose} textBtn={'Iniciar Sesion'} textTitle={'Necesitas iniciar sesion para continuar'} />
                        </>
                    }
                </div>
            </div>
            <div className="accordion mt-3 " id="accordionExample">
                <div className={`accordion-item ${''}`}>
                    <h2 className="accordion-header ">
                        <button className={`accordion-button ${createButton} bg-success text-light`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            DESCRIPCIÓN
                        </button>
                    </h2>
                    <div id="collapseOne" className={accordionTransition} data-bs-parent="#accordionExample">
                        <div className={`accordion-body`}>
                            {description}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CardProductsItem;