import React from 'react'
import { useState, useEffect } from 'react'
import AdminToggler from '../../components/specific/AdminToggler/AdminToggler';
import FootballFieldAdminView from '../../components/specific/FootballFieldAdminView/FootballFieldAdminView';
import UsersAdminView from '../../components/specific/UsersAdminView/UsersAdminView';
import ReservationsAdminView from '../../components/specific/ReservationsAdminView/ReservationsAdminView';
import ProductsAdminView from '../../components/specific/ProductsAdminView/ProductsAdminView';
import { adminSection } from './Administrator.module.css'
import { MdOutlineDangerous } from 'react-icons/md';
import { ToastContainer } from 'react-toastify';

const Administrator = ({ view, user }) => {

  const changeView = (newView) => {
    setCurrentView(newView);
  }

  const [CurrentView, setCurrentView] = useState('footballFields');

  return (
    <section className={`container-fluid  row justify-content-around  mt-5 py-5 px-0 mx-0 gap-5 ${adminSection}`}>
      {user?.loginUser.userPasswordHidden.admin ?
        (
          <>
            <h2 className='text-center'>Elija que coleccion desea administrar</h2>
            <ToastContainer
              theme='colored'
              autoClose={3000}
            />
            <AdminToggler handleViewChange={changeView} />
            {
              CurrentView === 'footballFields' ? <FootballFieldAdminView />
              :
              CurrentView === 'users' ? <UsersAdminView />
              :
              CurrentView === 'reservations' ? <ReservationsAdminView />
              :
              <ProductsAdminView />
            }
          </>
        )
        :
        (
          <>
            <div className='d-flex justify-content-center'>
              <MdOutlineDangerous color='red' size={'4rem'}/>
              <h1 className='text-light  m-2'><strong>No cuenta con las credenciales para esta seccion</strong></h1>
              <MdOutlineDangerous color='red' size={'4rem'}/>
            </div>
          </>
        )}

    </section>
  )
};


export default Administrator