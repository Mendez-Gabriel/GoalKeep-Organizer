import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react'
import FootballFieldCard from  '../../components/specific/footballFieldCard/FootballFieldCard';
import { sideBar, seccionCanchas, cardContainer} from './FootballFields.module.css';
import FootballFieldFilter from '../../components/specific/FootballFieldFilter/FootballFieldFilter';
import CardFieldPleaceholder from '../../components/general/cardFieldPleaceholder/CardFieldPleaceholder';

const FootballFields = ({ user }) => {
  const url = import.meta.env.VITE_APP_URL_BASE;
  const urlBase = `${url}/footballfields`;
  const [footballFieldData, setfootballFieldData] = useState([]);
  const [apiUrl, setapiUrl]  = useState(urlBase);
  const [queryParams, setQueryParams] = useState({});
  const [loader, setLoader] = useState(true);

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
        setLoader(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchFootballFieldsData();
  },[apiUrl,queryParams]);
  return (
    <>
      <section className={`container-fluid  row justify-content-center  mt-5 py-5 px-0 mx-0 ${seccionCanchas}`}>
        <h1 className='text-center'>Nuestras Canchas</h1>
        <aside className={`col-12 col-md-6 p-3 my-3 justify-content-center ${sideBar}`}>
          <FootballFieldFilter handleFilter={addFilters} deleteFiltters={clearFiltters}/>
        </aside>
        <div className={`${cardContainer}  row col-12 col-md-8 col-lg-7  justify-content-center mx-0 p-4 gap-5`}>
          { loader ?
            (
              [1, 2, 3, 4, 5, 6].map((index) => (
                <div key={index}>
                  <CardFieldPleaceholder />
                </div>
              ))            
            )
            :
            (
              footballFieldData.map(footballField => <FootballFieldCard
                key={footballField._id}
                id={footballField._id}
                name={footballField.name}
                grassType={footballField.grassType}
                players={footballField.players}
                imgUrl={footballField.imgUrl}
                user={ user }
              />)
            )
          }
        </div>
      </section>
    </>
  )
}

export default FootballFields