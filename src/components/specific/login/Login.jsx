import React from 'react';
import { useState } from 'react';
import { Link,  useNavigate } from 'react-router-dom';
import style from './Login.module.css';
import iconLogo from '../../../assets/Icon/Icon.svg'
import Input from '../../general/input/input';
import axios from 'axios';
import { FaEyeSlash, FaEye } from 'react-icons/fa6';
import InputReact from '../../general/inputReact/InputReact';
import Alert from '../../general/alertError/AlertError';
import AlertError from '../../general/alertError/AlertError';


const Login = ({ setUser, user }) => {

    const navigate = useNavigate();

    const { card, img, logoIconStyle, bgImage, textTitle } = style;
    const imageMessi = 'https://res.cloudinary.com/dptlgyfq5/image/upload/v1699462256/Login_oqbqnz.jpg';

    const url = import.meta.env.VITE_APP_URL_BASE_PRODUCTS
    const BaseApi = `${url}/user/login`;

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [activeEye, setActiveEye] = useState(false);
    const [dataForm, setDataForm] = useState({
        userName: '',
        password: ''
    });

    const handleChange = (event) => {
        const { value, name } = event.target;

        setDataForm((dataForm) => ({
            ...dataForm,
            [name]: value
        }));
        setError(null)
    };

    const handleClick = (click) => {
        if (!activeEye) {
            setActiveEye(true)
        } else {
            setActiveEye(false)
        }
    }

    
    const handleSubmit = (event) => {
        event.preventDefault();
        
        axios.post(BaseApi, dataForm)
        .then((response) => {
            if (response.status !== 200) throw new Error('No se pudo realizar la peticion');
            console.log(response.data);
            setData(response.data.loginUser.userPasswordHidden)
            setUser(response.data)
            localStorage.setItem('user', JSON.stringify(response.data));
        })
        .catch((err) => {
            console.log('Error en :', err.response.data.error);
            setError(err.response.data.error)
        })
        .finally(() => { console.log('Peticion Finalizada') })
    }

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <div>
            <div className={`${card}`}>
                <div className="row g-0 vh-100">
                    <div className="col-2 col-sm-4 col-md-7 col-xxl-9">
                        <img src={imageMessi} className={`img-fluid vh-100 ${img}`} />
                    </div>
                    <div className={`col-10 col-sm-8 col-md-5 col-xxl-3 d-flex align-items-center ${bgImage}`}>
                        <div className="container">
                            {user ?
                                (
                                <div className='text-center'>
                                    <h1 className={`fw-bold fst-italic ms-3 ${textTitle}`}>Bienvenido/a</h1>
                                    <h1 className={`fw-bold fst-italic ms-3 ${textTitle}`}><strong>{data.name}</strong></h1>
                                    <div>
                                        <button onClick={handleGoBack} className='btn btn-success mt-5'>Volver a la pagina anterior</button>
                                    </div>
                                    <Link to={'/'} className='btn btn-success mt-5'>Ir a Home</Link>
                                </div>
                                 )
                                :
                                (<>
                            <div className='d-flex justify-content-center m-2 mb-5 '>
                                <img src={iconLogo} className={logoIconStyle} alt="" />
                                <h1 className={`fw-bold fst-italic ms-3 ${textTitle}`}>GoalKeep Organizer</h1>
                            </div>
                                    <form className='m-3 pt-5 needs-validation' onSubmit={handleSubmit} noValidate>
                                        {error && (
                                            <AlertError setError={setError} error={error} />
                                        )}
                                        <Input margin={'mb-5'} placeholder={'Usuario o Email'} setSearchProduct={handleChange} type={'text'} name={'userName'} />
                                        <InputReact placeholder={'Contraseña'} margin={'mb-5'} type={activeEye ? 'text' : 'password'} handleChange={handleChange} handleClick={handleClick} text={activeEye ? <FaEye /> : <FaEyeSlash />} name={'password'} />
                                        <button type="submit" className='btn btn-primary mb-5'>Iniciar Sesion</button>
                                    </form>
                                    <div className='container d-flex mt-5 pt-5'>
                                        <p className={`d-flex fw-bold ${textTitle}`}>
                                            Aun no tienes una cuenta?
                                            <Link to={'/user/register'} className='text-light mx-2 link-underline link-underline-opacity-0'>
                                                Registrate
                                            </Link>
                                        </p>
                                    </div>
                                </>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;