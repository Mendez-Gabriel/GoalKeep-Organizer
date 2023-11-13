import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { createButton, tableSection} from './FootballFieldAdminView.module.css';
import { Trash3Fill, PenFill } from 'react-bootstrap-icons';


const FootballFieldAdminView = () => {

  const url = import.meta.env.VITE_APP_URL_BASE_PRODUCTS;
  const urlBase = `${url}/footballfields`;
  const [footballFieldData, setfootballFieldData] = useState([]);
  const [queryParams, setQueryParams] = useState({});
  const [reload, setReload] = useState(false);
  const [dataForm, setDataForm] = useState({
    name:'',
    grassType:'',
    players:'',
    imgUrl:''
  });
  const [selectedFootballField , setSelectedFootballField ] = useState({
    ...dataForm,_id:''
  });
  const [newName, setNewName] = useState('');
  const [newPlayers, setNewPlayers] = useState('');
  const [newGrassType, setNewGrassType] = useState('');
  const [newImgUrl, setNewImgUrl] = useState('');


  const clearFiltters = ()=>{
    setQueryParams({});
  };
  const addFilters = (params) =>{
    setQueryParams(params);
  };

  const handleChange= (e, isUpdate) =>{
    const { name, value } = e.target;
      setDataForm((dataForm)=>({
        ...dataForm,[name]:value  
      }))
  };
  
  const handleSubmit = async (e)=> {
    e.preventDefault();
    try {
      const response = await axios.post(urlBase,dataForm);
      console.log(response.data);
      setReload(!reload);
    } catch (error) {
      console.log(error);
    };
  }
  const handleDelete = async ( id ) => {
    if(confirm('Desea Eliminar esta Cancha?')){
      try {
        const response = await axios({
          url : urlBase,
          method : 'delete',
          params : {
            footballFieldId : id
          }
        })
        console.log(response.data);
        alert('Cancha Borrada')
        setReload(!reload);
      } catch (error) {
        console.log(error);
      };
    }else alert('Operacion Cancelada');
  };
  const handleUpdate = async ( footballFieldId ) => {
    if(confirm('Desea actualizar esta cancha?')){
      const query = {
        newName : newName,
        newGrassType : newGrassType,
        newPlayers : newPlayers,
        newImgUrl : newImgUrl,
        footballFieldId : footballFieldId
      };
      try {
        const response = await axios({
          method: 'patch',
          url: urlBase,
          data: query
        });
        console.log(response.data);
      } catch (error) {
        console.log(error)
      }
      setSelectedFootballField(selectedFootballField);
      setReload(!reload);
    }else alert('Operacion Cancelada.')
  } 

  useEffect(()=>{
    const fetchFootballFieldsData = async () => {
      try {
        const  {data}  = await axios.get(urlBase,queryParams);
        setfootballFieldData(data.footballFields);
      } catch (error) {
        console.log(error);
      }
    }
    fetchFootballFieldsData();
  },[urlBase,reload])

  useEffect(()=>{
    setNewName(selectedFootballField.name);
    setNewPlayers(selectedFootballField.players);
    setNewGrassType(selectedFootballField.grassType);
    setNewImgUrl(selectedFootballField.imgUrl);
  },[selectedFootballField]);

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
                <form id='fieldCreationForm' onSubmit={(e)=>handleSubmit(e)}>
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" name='name' id="nameInput" placeholder="name@example.com"
                    onChange={(e)=>{handleChange(e)}} required/>
                      <label htmlFor="nameInput">Nombre</label>
                  </div>
                  <select className="form-select form-select-md mb-3" name='players' aria-label="Large select example"
                  onChange={(e)=>{handleChange(e)}} required>
                    <option defaultValue>Nro. de Jugadores</option>
                    <option value="3-5">Futbol 5</option>
                    <option value="5-7">Futbol 7</option>
                    <option value="8-11">Futbol 11</option>
                  </select>
                  <select className="form-select form-select-md mb-3" name='grassType' aria-label="Large select example"
                  onChange={(e)=>{handleChange(e)}} required>
                    <option defaultValue>Tipo de Cesped</option>
                    <option value="Natural">Natural</option>
                    <option value="Sintetico">Sintetico</option>
                    <option value="Mixto">Mixto</option>
                  </select>
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" name='imgUrl' id="imgUrlInput" placeholder="name@example.com"
                    onChange={(e)=>{handleChange(e)}} required/>
                      <label htmlFor="imgUrlInput">URL Imagen</label>
                  </div>
                  <div className='row gap-3 gap-md-0 justify-content-around'>
                    <button type="button" className={`col-10 col-md-4 ${createButton}`} data-bs-dismiss="modal">Cerrar</button>
                    <button type="submit" className={`col-10 col-md-4 ${createButton}`} htmlFor='#fieldCreationForm'>Guardar Cancha</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="updateFieldModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="updateModalLabel">Actualizar Cancha</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" name='newName' id="updateNameInput" placeholder="name@example.com"
                  onChange={(e)=>{setNewName(e.target.value)}} value={newName} />
                    <label htmlFor="nameInput">Nombre</label>
                </div>
                <select className="form-select form-select-md mb-3" name='newPlayers' aria-label="Large select example"
                onChange={(e)=>{setNewPlayers(e.target.value)}}>
                  <option value={newPlayers}>Nro. de Jugadores</option>
                  <option value="3-5">Futbol 5</option>
                  <option value="5-7">Futbol 7</option>
                  <option value="8-11">Futbol 11</option>
                </select>
                <select className="form-select form-select-md mb-3" name='newGrassType' aria-label="Large select example"
                onChange={(e)=>{setNewGrassType(e.target.value)}}>
                  <option value={newGrassType}>Tipo de Cesped</option>
                  <option value="Natural">Natural</option>
                  <option value="Sintetico">Sintetico</option>
                  <option value="Mixto">Mixto</option>
                </select>
                <div className="form-floating mb-3">
                  <img src={newImgUrl} alt="cancha-seleccionada" className='img-fluid'/>
                  <input type="text" className="form-control" name='newImgUrl' id="updateImgUrlInput" placeholder="name@example.com"
                  onChange={(e)=>{setNewImgUrl(e.target.value)}} value={newImgUrl}/>
                    <label htmlFor="imgUrlInput">URL Imagen</label>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className={createButton} data-bs-dismiss="modal">Cerrar</button>
                <button type="button" className={createButton} data-bs-dismiss="modal" onClick={(e)=>handleUpdate(selectedFootballField._id)}>Guardar Cambios</button>
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
              <th className='d-none d-md-block'>Jugadores</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              footballFieldData.map(footballField => (
                <tr key={footballField._id}>
                  <td className="table-user">
                    {footballField.name}
                  </td>
                  <td>{footballField.grassType}</td>
                  <td className='d-none d-md-block'>{footballField.players}</td>
                  <td >
                    <PenFill color='#2E8B57' size={25} role='button' onClick={()=>setSelectedFootballField(footballField)} data-bs-toggle="modal" data-bs-target="#updateFieldModal"/>
                    <Trash3Fill color='#c21d03' size={25} role='button' onClick={()=>handleDelete(footballField._id)}/>
                  </td>
                </tr>
              ))
              }
          </tbody>
        </table>

          
      </div>
    </>
  )
}

export default FootballFieldAdminView