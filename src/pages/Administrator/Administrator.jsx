import React from 'react'
import { useState, useEffect } from 'react'
import AdminToggler from '../../components/specific/AdminToggler/AdminToggler';
import FootballFieldAdminView from '../../components/specific/FootballFieldAdminView/FootballFieldAdminView';
import UsersAdminView from '../../components/specific/UsersAdminView/UsersAdminView';
import ReservationsAdminView from '../../components/specific/ReservationsAdminView/ReservationsAdminView';
import ProductsAdminView from '../../components/specific/ProductsAdminView/ProductsAdminView';
import { adminSection } from './Administrator.module.css'

const Administrator = ({view}) => {

  const changeView = (newView) => {
    setCurrentView(newView);
  }
  
  const [CurrentView, setCurrentView] = useState('footballFields');

  return (
    <section  className={`container-fluid  row justify-content-around  mt-5 py-5 px-0 mx-0 gap-5 ${adminSection}`}>
      <h2 className='text-center'>Elija que coleccion desea administrar</h2>
      <AdminToggler handleViewChange={ changeView }/>
      {
        CurrentView==='footballFields'? <FootballFieldAdminView/>
        :
        CurrentView==='users'? <UsersAdminView/>
        :
        CurrentView==='reservations'? <ReservationsAdminView/>
        :
        <ProductsAdminView/>
      }
    </section>
  )
};


export default Administrator