import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { infoSection, button } from './Reservations.module.css'
import TurnPicker from '../../components/specific/TurnPicker/TurnPicker';
import { Trash3Fill, XOctagon } from 'react-bootstrap-icons';




const Reservations = ({ user }) => {

    const { loginUser } = user;
    const [userData, setUserData] = useState(loginUser.userPasswordHidden)
    const [userTurns, setUserTurns] = useState([]);
    const params = useParams();
    const urlBase = import.meta.env.VITE_APP_URL_BASE
    const apiUrl = `${urlBase}/footballFields`
    const [fieldData, setFieldData] = useState({});
    const queryParams= { footballFieldId : params.id };
    const [ocuppiedTurns, setOcuppiedTurns] = useState([]);
    const [startHour, setStartHour] = useState('');
    const [endingHour, setEndingHour] = useState('');
    const [day, setDay] = useState('')
    const [reload, setReload] = useState(false);
    const dateFormat = new Intl.DateTimeFormat('es-ES', {month: 'long',day: 'numeric'});

    const handleReservation = async () =>{
      if(!startHour||!endingHour||!day){
        alert('Por favor elija fecha y horario');
        return
      }
      if(confirm('Seguro que desea realizar esta reserva?')){
        const dataForm = {
          user: userData._id,
          footballField: params.id,
          day: day,
          hour:{
            start: startHour,
            end: endingHour
          }
        };
        try {
          const { data } = await axios({
            method:'post',
            url:`${urlBase}/reservation`,
            data: dataForm
          });
          alert(`Reserva realizada para el dia ${dataForm.day} de ${dataForm.hour.start} a ${dataForm.hour.end}hs`);
          setReload(!reload);
        } catch (error) {
          alert('Fecha no disponible');
          console.log(error);
        };
      }else alert('Operacion cancelada.')
    };
    const handleCancelation = async (id) => {
      if(confirm('Desea cancelar el turno?')){
        try {
          const { data } = await axios({
            method:'delete',
            url:`${urlBase}/reservation`,
            params:{ reservationId : id}
          });
          setReload(!reload);
          console.log(data)
        } catch (error) {
          console.log(error)
        }
      }else alert('Operacion Cancelada')
    }

    useEffect(()=>{
      const fetchReservationData = async () => {
        try {
          const { data } = await axios({
            method:'get',
            url:`${urlBase}/reservation`,
            params:{day: day, footballField: params.id}
          });
          console.log(data.reservations);
          setOcuppiedTurns(data.reservations);
        } catch (error) {
          console.log(error)
        }
      }
      if(day)fetchReservationData();
    },[day])
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
      const fetchUserReservations = async () => {
        try {
          const { data } = await axios({
            method: 'get',
            url: `${urlBase}/reservation`,
            params: { user: userData._id }
          });
          console.log(data.reservations);
          setUserTurns(data.reservations);
        } catch (error) {
          console.log(error);
        }
      }
      fetchUserReservations();
      fetchFieldData();
    },[reload]);
  return (
    <>
      <section className={`${infoSection} align-items-center container-fluid justify-content-center row mt-5 py-5 px-0 mx-0`}>
        <h1 className='text-center'>Reservaciones</h1>
        <div className='justify-content-center row col-md-7 col-12 mx-0 px-0'>
          <img src={fieldData.imgUrl} alt={fieldData.name} className='img-fluid'/>
        </div>
        <div className='col-md-3 col-12 mx-0 py-0 '>
          <ul className='list-group list-group-flush text-center'>
            <li className='list-group-item'><strong>Cancha:</strong> {fieldData.name}</li>
            <li className='list-group-item'><strong>Cesped:</strong> {fieldData.grassType}</li>
            <li className='list-group-item'><strong>Jugadores:</strong> {fieldData.players}</li>
            <li className='list-group-item'><strong>Mis turnos:</strong></li>
            {
              userTurns.map((turn) => (
                <li className='list-group-item'>{`Dia ${dateFormat.format(new Date(turn.day))} de ${turn.hour.start} a ${turn.hour.end}hs `}
                  <XOctagon size={25} color='red' role='button' onClick={()=>handleCancelation(turn._id)} /></li>
              ))
            }      
          </ul>
        </div>
        <h3 className='text-center mt-5'>Elija Fecha y Horario</h3>
          <TurnPicker
            setDay={setDay}
            setStart={setStartHour}
            setEnd={setEndingHour}
            disabledTurns={ocuppiedTurns}
          />
        <div className='row justify-content-center col-12 mt-5'>
          <button className={`col-3 ${button}`} onClick={handleReservation}>Realizar Reserva</button>
        </div>
      </section>
    </>
  )
}

export default Reservations