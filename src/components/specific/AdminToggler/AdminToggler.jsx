import React from 'react';
import { useState } from 'react';
import Styles from './AdminToggler.module.css';
import { GearFill, Gear } from 'react-bootstrap-icons';
const { container, tabs, tab, notification, glider } = Styles;

const AdminToggler = ({ handleViewChange }) => {

  const [viewOption, setViewOption] = useState('footballFields')

  const handleRadioChange = (e) => {
    setViewOption(e.target.id);
    handleViewChange(e.target.id);
  };

  return (
    
    <div className={container}>
      <div className={tabs}>
        <input type="radio" id="footballFields" name="tabs" 
        checked={viewOption==='footballFields'} onChange={handleRadioChange}/>
        <label className={tab} htmlFor="footballFields">Canchas<span className={notification}><Gear color='#2E8B57'/></span></label>
        <input type="radio" id="users" name="tabs"
        checked={viewOption==='users'} onChange={handleRadioChange}/>
        <label className={tab} htmlFor="users">Usuarios<span className={notification}><Gear color='#2E8B57'/></span></label>
        <input type="radio" id="reservations" name="tabs"
        checked={viewOption==='reservations'} onChange={handleRadioChange}/>
        <label className={tab} htmlFor="reservations">Reservas<span className={notification}><Gear color='#2E8B57'/></span></label>
        <input type="radio" id="products" name="tabs"
        checked={viewOption==='products'} onChange={handleRadioChange}/>
        <label className={tab} htmlFor="products">Productos<span className={notification}><Gear color='#2E8B57'/></span></label>
        <span className={glider}></span>
      </div>
    </div>
  

  )
}

export default AdminToggler