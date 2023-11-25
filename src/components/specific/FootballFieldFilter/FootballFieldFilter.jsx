import React from 'react'
import { useState } from 'react';

const FootballFieldFilter = ({handleFilter, deleteFiltters}) => {

  const [playersParams, setPlayersParams] = useState('');
  const [grassTypeParams, setGrassTypeParams] = useState('');

  const queryParameters = {
    params:{
      players:playersParams,
      grassType:grassTypeParams
    }
  }

  return (

    <div className='container-fluid row justify-content-center px-0'>
      <h6 className='text-center'>Filtrar por:</h6>
      <p className='text-center'>Nro. de Jugadores</p>
      <div className="text-center htmlForm-check htmlForm-check-reverse">
        <input className="htmlForm-check-input" type="radio" name="players" id="radioFut5" value="3-5" 
        checked={playersParams==='3-5'} onChange={(e)=>setPlayersParams(e.target.value)}/>
          <label className="htmlForm-check-label" htmlFor="radioFut5">Futbol 5</label>
      </div>
      <div className="text-center text-center htmlForm-check htmlForm-check-reverse">
        <input className="htmlForm-check-input" type="radio" name="players" id="radioFut7" value="5-7"
        checked={playersParams==='5-7'} onChange={(e)=>setPlayersParams(e.target.value)}/>
          <label className="htmlForm-check-label" htmlFor="radioFut7">Futbol 7</label>
      </div>
      <div className="text-center htmlForm-check htmlForm-check-reverse">
        <input className="htmlForm-check-input" type="radio" name="players" id="radioFut11" value="8-11"
        checked={playersParams==='8-11'} onChange={(e)=>setPlayersParams(e.target.value)}/>
          <label className="htmlForm-check-label" htmlFor="radioFut11">Futbol 11</label>
      </div>
      <p className='text-center'>Tipo de Cesped</p>
      <div className="text-center htmlForm-check htmlForm-check-reverse">
        <input className="htmlForm-check-input" type="radio" name="grassType" id="radioNatural" value="Natural"
        checked={grassTypeParams==='Natural'} onChange={(e)=>setGrassTypeParams(e.target.value)}/>
          <label className="htmlForm-check-label" htmlFor="radioNatural">Natural</label>
      </div>
      <div className="text-center htmlForm-check htmlForm-check-reverse">
        <input className="htmlForm-check-input" type="radio" name="grassType" id="radioSintetic" value="Sintetico"
        checked={grassTypeParams==='Sintetico'} onChange={(e)=>setGrassTypeParams(e.target.value)}/>
          <label className="htmlForm-check-label" htmlFor="radioSintetic">Sintetico</label>
      </div>
      <div className="text-center htmlForm-check htmlForm-check-reverse">
        <input className="htmlForm-check-input" type="radio" name="grassType" id="radioMixto" value="Mixto"
        checked={grassTypeParams==='Mixto'} onChange={(e)=>setGrassTypeParams(e.target.value)}/>
          <label className="htmlForm-check-label" htmlFor="radioMixto">Mixto</label>
      </div>
      <div className='d-flex justify-content-center gap-3 mt-3 px-0'>
        <button type="button" className="btn btn-success" onClick={
          (e)=>{
          e.preventDefault();
          handleFilter(queryParameters);
        }}>Filtrar</button>
        <button type="button" className="btn btn-danger" onClick={
          (e)=>{
            e.preventDefault();
            deleteFiltters();
          }
        }>Eliminar Filtros</button>
      </div>
    </div>
  )
}

export default FootballFieldFilter