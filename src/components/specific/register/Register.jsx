import React from 'react';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import style from './Register.module.css';
import iconLogo from '../../../assets/Icon/Icon.svg'
import Input from '../../general/input/input';
import axios from 'axios';
import { FaEyeSlash, FaEye } from 'react-icons/fa6';
import InputReact from '../../general/inputReact/InputReact';

const Register = () => {

    const { card, img, logoIconStyle, bgImage, textTitle } = style;
    const imageMessi = 'https://res.cloudinary.com/dptlgyfq5/image/upload/v1699462256/Login_oqbqnz.jpg';

    const url = import.meta.env.VITE_APP_URL_BASE_PRODUCTS
    const BaseApi = `${url}user/register`;

    const [activeEye, setActiveEye] = useState(false);
    const [dataForm, setDataForm] = useState({
        name: '',
        lastName: '',
        userName: '',
        password: '',
        email: '',
    });

    const handleChange = (event) => {
        const { value, name } = event.target;

        setDataForm((dataForm) => ({
            ...dataForm,
            [name]: value
        }));
    };

    const handleClick = (click) => {
        if(!activeEye){
            setActiveEye(true)
        }else{
            setActiveEye(false)
        }
    }

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(dataForm);

        axios.post(BaseApi, dataForm)
            .then((response) => {
                if (response.status !== 200) throw new Error('No se pudo realizar la peticion');
                console.log(response.data);
                navigate('/user/login');
            })
            .catch((err) => { console.log(err) })
            .finally(() => { console.log('Peticion Finalizada') })
    }

    return (
        <div className='' tabIndex={'2'}>
            <div className={`${card}`}>
                <div className="row g-0 vh-100">
                    <div className="col-2 col-sm-4 col-md-7 col-xxl-9">
                        <img src={imageMessi} className={`img-fluid vh-100 ${img}`} alt="..." />
                    </div>
                    <div className={`col-10 col-sm-8 col-md-5 col-xxl-3 d-flex align-items-center ${bgImage}`}>
                        <div className="container">
                            <div className='d-flex justify-content-center m-2 mb-5 '>
                                <img src={iconLogo} className={logoIconStyle} alt="" />
                                <h1 className={`text-light fw-bold fst-italic ms-3 ${textTitle}`}>GoalKeep Organizer</h1>
                            </div>
                            <form className='m-3 pt-5' onSubmit={handleSubmit}>
                                <Input margin={'mb-5'} placeholder={'Nombre'} setSearchProduct={handleChange} type={'text'} name={'name'} />
                                <Input margin={'mb-5'} placeholder={'Apellido'} setSearchProduct={handleChange} type={'text'} name={'lastName'} />
                                <Input margin={'mb-5'} placeholder={'Usuario'} setSearchProduct={handleChange} type={'text'} name={'userName'} />
                                <InputReact placeholder={'Contraseña'} margin={'mb-5'} type={activeEye ? 'text' : 'password'} handleChange={handleChange} handleClick={handleClick} text={activeEye ? <FaEye/> : <FaEyeSlash/>} name={'password'}/>                       
                                <Input margin={'mb-5'} placeholder={'Email'} setSearchProduct={handleChange} type={'email'} name={'email'} />
                                <button type="submit" className="btn btn-primary">Finalizar Registro</button>
                            </form>
                            <div className='container d-flex mt-5 pt-5'>
                                <p className={`d-flex fw-bold ${textTitle}`}>
                                    Ya tienes cuenta?
                                    <Link to={'/user/login'} className='text-light mx-2 link-underline link-underline-opacity-0'>
                                        Inicia sesion
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;