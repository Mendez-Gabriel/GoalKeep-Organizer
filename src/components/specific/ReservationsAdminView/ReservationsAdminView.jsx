import React from 'react'
import { createButton, tableSection} from '../FootballFieldAdminView/FootballFieldAdminView.module.css';
import { InfoCircle } from 'react-bootstrap-icons';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);


const ReservationsAdminView = () => {
  const urlBase = import.meta.env.VITE_APP_URL_BASE;
  const [reload, setReload] = useState(false)
  const [userData, setUserData] = useState([]);
  const [footballFieldData, setFootballFieldData] = useState([]);
  const [reservationData, setReservationData] = useState([]);
  const [selectedReservation, setSelectedReservation] = useState(null)
  const [newUser, setNewUser] = useState('');
  const [newFootballField, setNewFootballField] = useState('');
  const [newDay, setNewDay] = useState('');
  const [newHour, setNewHour] = useState({start:0,end:0});

  const cancelTurn = async ( reservationId ) => {
      try {
      const {data} = await axios({
        method:'delete',
        url:`${urlBase}/reservation`,
        params:{ reservationId : reservationId }
      });
      toast.success(data.message);
      setReload(!reload);
    } catch (error) {
      console.log(error);
    };
  };

  
  useEffect(()=>{
    const fetchUserData = async () =>{
      try {
        const { data } = await axios({
          method:'get',
          url:`${urlBase}/user`,
          params:{}
        });
        setUserData(data.allUsers);
      } catch (error) {
        console.log(error);
      };
    };
    const fetchFieldsData = async() => {
      try {
        const { data } = await axios({
          method:'get',
          url:`${urlBase}/footballfields`,
          params:{}
        });
        setFootballFieldData(data.footballFields);
      } catch (error) {
        console.log(error);
      };
    };
    const fetchReservationsData = async ()=>{
      try {
        const { data } = await axios({
          method:'get',
          url:`${urlBase}/reservation`,
          params:{}
        });
        setReservationData(data.reservations);
      } catch (error) {
        console.log(error);
      };
    };
    fetchReservationsData();
    fetchFieldsData();
    fetchUserData();
  },[reload]);
  useEffect(()=>{
    selectedReservation&&setNewUser(userData.find((user)=> user._id === selectedReservation.user)?.userName);
    selectedReservation&&setNewFootballField(footballFieldData.find((field)=> field._id === selectedReservation.footballField)?.name);
    selectedReservation&&setNewDay(selectedReservation.day);
    selectedReservation&&setNewHour(selectedReservation.hour);
  },[selectedReservation])
  return (
    <>
      <div className="modal fade" id="reservationModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="reservationModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="reservationModalLabel">Reserva</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" name='user' id="userInput" placeholder="name@example.com"
                    value={newUser} disabled />
                  <label htmlFor="lastNameInput">User</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" name='user' id="fieldInput" placeholder="name@example.com"
                    value={newFootballField} disabled />
                  <label htmlFor="lastNameInput">Cancha</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" name='user' id="dayInput" placeholder="name@example.com"
                    value={newDay} disabled />
                  <label htmlFor="lastNameInput">Dia</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" name='user' id="hourInput" placeholder="name@example.com"
                    value={`De ${newHour.start} a ${newHour.end}hs`} disabled />
                  <label htmlFor="lastNameInput">Dia</label>
                </div>
          
                <div className='row gap-3 gap-md-0 justify-content-around'>
                  <button type="button" className={`col-10 col-md-4 ${createButton}`} data-bs-dismiss="modal">Cerrar</button>
                  <button type="submit" className={`col-10 col-md-4 ${createButton}`} data-bs-toggle="modal" data-bs-target="#deleteConfirmModal">Cancelar Turno</button>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade" id="deleteConfirmModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="deleteConfirmModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-body">
              <h5 className='text-center'>¿Seguro que desea cancelar esta reserva?</h5>
            </div>
            <div class="modal-footer">
              <button type="button" className={createButton} data-bs-dismiss="modal" onClick={()=>toast.warning('Operación cancelada')}>No</button>
              <button type="button" className={createButton} data-bs-dismiss="modal" onClick={()=>cancelTurn(selectedReservation._id)}>Si</button>
            </div>
          </div>
        </div>
      </div>
      <div className={`col-12 col-md-9 mx-0 px-0 py-4 p-md-4 ${tableSection}`}>
        <table className="table table-striped table-centered mb-0">
          <thead>
            <tr>
              <th>Usuario</th>
              <th className='d-none d-md-block'>Cancha</th>
              <th>Dia</th>
              <th>Hora</th>
              <th>Mas</th>
            </tr>
          </thead>
          <tbody>
            {
              reservationData.map((reservation) => (
                <tr key={reservation._id}>
                  <td>
                    {
                      userData&&
                      userData.find((user)=> user._id === reservation.user)?.userName
                    }                    
                  </td>
                  <td className='d-none d-md-block'>
                    {
                      footballFieldData &&
                      footballFieldData.find((field) => field._id === reservation.footballField)?.name
                    }
                  </td>
                  <td>{dayjs.utc(reservation.day).add(1,'day').tz('America/Argentina/Buenos_Aires').format('DD [de] MMM[,] YYYY')}</td>
                  <td>De {reservation.hour.start} a {reservation.hour.end}hs</td>
                  <td><InfoCircle color='#61bc84' size={20} role='button' data-bs-toggle='modal' data-bs-target='#reservationModal' onClick={()=>setSelectedReservation(reservation)}/></td>
                </tr>
              ))
            }
          </tbody>
        </table>

          
      </div>
    </>
  )
}

export default ReservationsAdminView