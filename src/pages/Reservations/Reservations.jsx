import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { infoSection, button, infoCard, createButton } from './Reservations.module.css'
import TurnPicker from '../../components/specific/TurnPicker/TurnPicker';
import { Trash3Fill, XOctagon } from 'react-bootstrap-icons';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);





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
    const [cancelationId, setCancelationId] = useState('');

    const handleReservation = async () =>{
      if(!startHour||!endingHour||!day){
        toast.warning('Por favor elija fecha y horario');
        return
      }
      if(endingHour<startHour){
        toast.warning('Elija un horario valido');
        return
      }
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
          toast.success(`Reserva realizada para el dia ${dayjs.utc(day).add(1,'day').tz('America/Argentina/Buenos_Aires').format('DD [de] MMM[,] YYYY')} de ${dataForm.hour.start} a ${dataForm.hour.end}hs`);
          setReload(!reload);
        } catch (error) {
          toast.error('Fecha no disponible');
          console.log(error);
        };
    };
  const handleCancelation = async (id) => {
    try {
      const { data } = await axios({
        method: 'delete',
        url: `${urlBase}/reservation`,
        params: { reservationId: id }
      });
      toast.error('Turno cancelado exitosamente')
      setReload(!reload);
    } catch (error) {
      console.log(error)
    }
  }

    useEffect(()=>{
      const fetchReservationData = async () => {
        try {
          const { data } = await axios({
            method:'get',
            url:`${urlBase}/reservation`,
            params:{day: day, footballField: params.id}
          });
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
            params: { user: userData._id, footballField: params.id }
          });
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
        <ToastContainer
          theme='colored'
          autoClose={3000}
          position='top-center'
        />
        <div class="modal fade" id="turnCancelationConfirmModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="turnCancelationConfirmModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-body">
                <h5 className='text-center'>¿Desea cancelar este turno?</h5>
              </div>
              <div class="modal-footer">
                <button type="button" className={createButton} data-bs-dismiss="modal" onClick={() => toast.warning('Operación cancelada')}>Cancelar</button>
                <button type="button" className={createButton} data-bs-dismiss="modal" onClick={() => handleCancelation(cancelationId)}>Borrar</button>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="reservationConfirmModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="reservationConfirmModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-body">
                <h5 className='text-center'>{day?`¿Reservar esta cancha para el dia: ${dayjs.utc(day).add(1,'day').tz('America/Argentina/Buenos_Aires').format('DD [de] MMM[,] YYYY')}?`:'¿Realizar Reserva?'}</h5>
              </div>
              <div class="modal-footer">
                <button type="button" className={createButton} data-bs-dismiss="modal" onClick={() => toast.warning('Operación cancelada')}>Cancelar</button>
                <button type="button" className={createButton} data-bs-dismiss="modal" onClick={handleReservation}>Reservar</button>
              </div>
            </div>
          </div>
        </div>
        <div className={`${infoCard} justify-content-center align-items-start row col-md-7 col-12 mx-0  p-4 gap-5`}>
          <div className='col-12 p-0 ratio ratio-16x9'>
            <img src={fieldData.imgUrl} alt={fieldData.name} className='img-fluid'/>
          </div>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item text-center'><strong style={{fontSize:'2rem'}}>{fieldData.name?.toUpperCase()}</strong></li>
            <li className='list-group-item'><strong>Cesped:</strong> {fieldData.grassType}</li>
            <li className='list-group-item'><strong>Jugadores:</strong> {fieldData.players}</li>
            <li className='list-group-item'><strong>Mis turnos:</strong></li>
            {
              userTurns.length===0
              ?
              <li className='list-group-item'>No tienes turnos en esta cancha</li>
              :
              userTurns.map((turn) => (
                <li key={turn._id} className='fst-italic list-group-item'>{`Dia ${dayjs.utc(turn.day).add(1,'day').tz('America/Argentina/Buenos_Aires').format('DD [de] MMM[,] YYYY')} de ${turn.hour.start} a ${turn.hour.end}hs `}
                  <XOctagon size={25} color='red' role='button' data-bs-toggle="modal" data-bs-target="#turnCancelationConfirmModal" onClick={()=>setCancelationId(turn._id)} /></li>
              ))
            }      
          </ul>
        <h3 className='text-center mt-5'>ELIJA FECHA Y HORARIO</h3>
          <TurnPicker
            setDay={setDay}
            setStart={setStartHour}
            setEnd={setEndingHour}
            disabledTurns={ocuppiedTurns}
          />
          <button className={`col-10 ${button}`} data-bs-toggle="modal" data-bs-target="#reservationConfirmModal">Realizar Reserva</button>
        </div>
      </section>
    </>
  )
}

export default Reservations