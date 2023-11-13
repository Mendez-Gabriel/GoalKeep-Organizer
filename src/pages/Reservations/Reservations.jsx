import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { infoSection } from './Reservations.module.css'


const Reservations = () => {

    const params = useParams();
    const urlBase = 'http://localhost:8080' /*import.meta.env.VITE_APP_URL_BASE*/
    const apiUrl = `${urlBase}/footballFields`
    const [fieldData, setFieldData] = useState({});
    const queryParams= { footballFieldId : params.id };

    useEffect(()=>{
      const fetchFieldData = async () => {
        try {
          const  {data}  = await axios({
            method:'get',
            url: apiUrl,
            params:queryParams
          });
          console.log(data.footballFields[0]);
          setFieldData(data.footballFields[0]);
        } catch (error) {
          console.log(error);
        }
      }
      fetchFieldData();
    },[]);
  return (
    <>
      <section className={`${infoSection} container-fluid justify-content-center row mt-5 py-5 px-0 mx-0`}>
        <div className='col-md-9 col-12 mx-0 px-0'>
          <img src={fieldData.imgUrl} alt={fieldData.name} className='img-fluid'/>
        </div>
        <div className='col-md-3 col-12 mx-0 py-0 '>
          <ul className='class="list-group list-group-flush text-center'>
            <li className='list-group-item'>Cancha: {fieldData.name}</li>
            <li className='list-group-item'>Cesped: {fieldData.grassType}</li>
            <li className='list-group-item'>Jugadores: {fieldData.players}</li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Reservations