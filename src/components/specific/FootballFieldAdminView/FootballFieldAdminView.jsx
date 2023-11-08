import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { createButton, tableSection} from './FootballFieldAdminView.module.css';
import { Trash3Fill, PenFill } from 'react-bootstrap-icons';


const FootballFieldAdminView = () => {

  const urlBase = 'http://localhost:8080/footballfields'
  const [footballFieldData, setfootballFieldData] = useState([]);
  const [apiUrl, setapiUrl]  = useState(urlBase);


  useEffect(()=>{
    const fetchFootballFieldsData = async () => {
      try {
        const  {data}  = await axios.get(apiUrl);
        console.log(footballFieldData)
        setfootballFieldData(data.footballFields);
      } catch (error) {
        console.log(error);
      }
    }
    fetchFootballFieldsData();
  },[apiUrl]);


  return (
    <>
      <div className='d-flex justify-content-center'>
        <button type="button" className={createButton} data-bs-toggle="modal" data-bs-target="#fieldCreationModal">
          Crear una nueva cancha
        </button>

        <div className="modal fade" id="fieldCreationModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">Datos de Cancha</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="nameInput" placeholder="name@example.com"/>
                    <label htmlFor="nameInput">Nombre</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="grassTypeInput" placeholder="name@example.com"/>
                    <label htmlFor="grassTypeInput">Tipo de cesped</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="playersInput" placeholder="name@example.com"/>
                    <label htmlFor="playersInput">Jugadores</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="imgUrlInput" placeholder="name@example.com"/>
                    <label htmlFor="imgUrlInput">URL Imagen</label>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className={createButton} data-bs-dismiss="modal">Cerrar</button>
                <button type="button" className={createButton}>Guardar Cancha</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className={`col-12 col-md-9 mx-0 px-0 py-4 p-md-4 ${tableSection}`}>
        <table className="table table-striped table-centered mb-0">
          <thead>
            <tr>
              <th>Cancha</th>
              <th>Cesped</th>
              <th>Jugadores</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              footballFieldData.map(footballField => {
                <tr>
                  <td className="table-user">
                    {footballField.name}
                  </td>
                  <td>{footballField.grassType}</td>
                  <td>{footballField.players}</td>
                  <td className="d-flex justify-content-around">
                    <PenFill color='#2E8B57' size={30} />
                    <Trash3Fill color='#c21d03' size={30} />
                  </td>
                </tr>
              })
              }
          </tbody>
        </table>

          
      </div>
    </>
  )
}

export default FootballFieldAdminView