import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'
import FootballFieldCard from  '../../components/specific/FootballFieldCard/FootballFieldCard'
import Styles from './FootballFields.module.css'
import FootballFieldFilter from '../../components/specific/FootballFieldFilter/FootballFieldFilter';

const FootballFields = () => {
  const url = import.meta.env.VITE_APP_URL_BASE;
  const urlBase = `${url}/footballfields`;
  const [footballFieldData, setfootballFieldData] = useState([]);
  const [apiUrl, setapiUrl]  = useState(urlBase);
  const [queryParams, setQueryParams] = useState({});

  const clearFiltters = ()=>{
    setQueryParams({});
  };
  const addFilters = (params) =>{
    setQueryParams(params);
  };

  useEffect(()=>{
    const fetchFootballFieldsData = async () => {
      try {
        const  {data}  = await axios.get(apiUrl,queryParams);
        setfootballFieldData(data.footballFields);
      } catch (error) {
        console.log(error);
      }
    }
    fetchFootballFieldsData();
  },[apiUrl,queryParams]);
  return (
    <>
      <section className={`container-fluid  row justify-content-around  mt-5 py-5 px-0 mx-0 ${Styles.seccionCanchas}`}>
        <h1 className='text-center'>Nuestras Canchas</h1>
        <aside className={`px-0 my-3 col-12 justify-content-center ${Styles.sideBar}`}>
          <FootballFieldFilter handleFilter={addFilters} deleteFiltters={clearFiltters}/>
        </aside>
        <div className='container-fluid row col-11  justify-content-center mx-0 px-0 gap-3'>
          {
            footballFieldData.map(footballField => <FootballFieldCard
              key={footballField._id}
              name={footballField.name}
              grassType={footballField.grassType}
              players={footballField.players}
              imgUrl={footballField.imgUrl}
            />)
          }
        </div>
      </section>
    </>
  )
}

export default FootballFields