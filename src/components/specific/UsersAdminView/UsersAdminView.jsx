import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { createButton, tableSection} from '../FootballFieldAdminView/FootballFieldAdminView.module.css';
import { InfoCircle,  XCircle, CheckCircle } from 'react-bootstrap-icons';

const UsersAdminView = () => {

  const urlBase = 'http://localhost:8080';
  const [reload, setReload] = useState(false);
  const [userData, setUserData] = useState([]);
  const [queryParams, setQueryParams] = useState({});
  const [selectedUser, setSelectedUser] = useState(null);
  const [newActive, setNewActive] = useState(false);
  const [newAdmin, setNewAdmin] = useState(false);
  const [dataForm, setDataForm] = useState({});

  const handleUpdate = async (e, id) => {
    e.preventDefault();
    let query = {
      name: selectedUser.name,
      lastName: selectedUser.lastName,
      userName: selectedUser.userName,
      password: selectedUser.password,
      active: newActive,
      admin: newAdmin
    }
    try {
      const response = await axios({
        method:'put',
        url:`${urlBase}/user/${id}`,
        data: query
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    };
    setReload(!reload);
  };

  useEffect(()=>{
    const fetchUserData = async () => {
      try {
        const { data } = await axios({
          method:'get',
          url: `${urlBase}/user`,
          params:queryParams
        });
        setUserData( data.allUsers );
      } catch (error) {
        console.log( error );
      }
    }
    fetchUserData();
  },[reload,queryParams])
  useEffect(()=>{
    if(selectedUser){
      setNewActive(selectedUser.active);
      setNewAdmin(selectedUser.admin);
    }
  },[selectedUser])
  return (
    <>
      <div className='d-flex justify-content-center'>

        <form id='filterForm' onSubmit={(e)=>{e.preventDefault(); setQueryParams(dataForm)}}>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" name='filter' id="filterInput" placeholder="name@example.com"
            onChange={(e)=>setDataForm({ name : e.target.value})}/>
            <label htmlFor="#filterInput">Filtrar por nombre</label>
          </div>
          <button type="submit" className={createButton} htmlFor='#filterForm'>
            Buscar
          </button>
        </form>
        <div className="modal fade" id="userUpdateModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="userModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="userModalLabel">Modal title</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form id='userUpdateForm' onSubmit={(e)=>handleUpdate(e,selectedUser._id)}>
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" name='name' id="nameInput" placeholder="name@example.com"
                      value={selectedUser && selectedUser.name} disabled/>
                    <label htmlFor="lastNameInput">Nombre</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" name='lastName' id="lastNameInput" placeholder="name@example.com"
                      value={selectedUser && selectedUser.lastName} disabled/>
                    <label htmlFor="nameInput">Apellido</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" name='userName' id="userNameInput" placeholder="name@example.com"
                      value={selectedUser && selectedUser.userName} disabled/>
                    <label htmlFor="userNameInput">Nombre de Usuario</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" name='email' id="emailInput" placeholder="name@example.com"
                      value={selectedUser && selectedUser.email} disabled/>
                    <label htmlFor="nameInput">Email</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" name='admin' id="adminInput" placeholder="name@example.com"
                      value={newAdmin?'Es administrador' : 'NO es administrador'} disabled/>
                    <label htmlFor="adminInput">Administrador</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" name='active' id="activeInput" placeholder="name@example.com"
                      value={newActive?'SI' : 'NO'} disabled/>
                    <label htmlFor="activeInput">Activo</label>
                  </div>
                  <div className="form-check form-switch mb-3">
                    {
                      newActive?
                      <input className="form-check-input" type="checkbox" role="switch" id="activeSwitchCheckChecked" onChange={(e) => {setNewActive(!newActive)}} name={'active'} checked/>
                      :
                      <input className="form-check-input" type="checkbox" role="switch" id="activeSwitchCheckChecked" onChange={(e) => {setNewActive(!newActive)}} name={'active'} />
                    }
										<label className="form-check-label" htmlFor="activeSwitchCheckChecked">{newActive?'Inhabilitar':'Habilitar'}</label>
									</div>
                  <div className="form-check form-switch mb-3">
                    {
                      newAdmin?
                      <input className="form-check-input" type="checkbox" role="switch" id="adminSwitchCheckChecked" onChange={(e) => {setNewAdmin(!newAdmin)}} name={'admin'} checked/>
                      :
										  <input className="form-check-input" type="checkbox" role="switch" id="adminSwitchCheckChecked" onChange={(e) => {setNewAdmin(!newAdmin)}} name={'admin'} />
                    }
										<label className="form-check-label" htmlFor="SwitchCheckChecked">{newAdmin?'Quitar admin':'Dar admin'}</label>
									</div>
                  <div className='row gap-3 gap-md-0 justify-content-around'>
                    <button type="button" className={`col-10 col-md-4 ${createButton}`} data-bs-dismiss="modal">Cerrar</button>
                    <button type="submit" className={`col-10 col-md-4 ${createButton}`} htmlFor='#userUpdateForm'>Guardar Cambios</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
      <div className={`col-12 col-md-9 mx-0 px-0 py-4 p-md-4 ${tableSection}`}>
        <table className="table table-striped table-centered mb-0">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th className='d-none d-md-block'>Email</th>
              <th>Detalles</th>
            </tr>
          </thead>
          <tbody>
            {
              userData.map((user)=>(
                <tr key={user._id}>
                  <td className="table-user">
                    {user.name}
                  </td>
                  <td>{user.lastName}</td>
                  <td className='d-none d-md-block'>{user.email}</td>
                  <td>
                    <InfoCircle color='#2E8B57' size={25} role='button' data-bs-toggle="modal" data-bs-target="#userUpdateModal" onClick={()=>setSelectedUser(user)}/>
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

export default UsersAdminView