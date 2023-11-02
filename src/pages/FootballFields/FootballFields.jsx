import axios from 'axios';
import React from 'react'
import FootballFieldCard from  '../../components/specific/FootballFieldCard/FootballFieldCard'
import { useState, useEffect } from 'react'
import { TypeH1 } from 'react-bootstrap-icons';

const FootballFields = () => {
  const urlBase = 'http://localhost:8080/footballfields'
  const [footballFieldData, setfootballFieldData] = useState([]);
  const [apiUrl, setapiUrl]  = useState(urlBase);

  useEffect(()=>{
    const fetchFootballFieldsData = async () => {
      try {
        const  {data}  = await axios.get(apiUrl);
        setfootballFieldData(data.footballFields);
      } catch (error) {
        console.log(error);
      }
    }
    fetchFootballFieldsData();
  },[apiUrl]);
  return (
    <>
      <section className='container-fluid  row justify-content-around gap-3 my-5 py-5 px-0 mx-0'>
      {
        footballFieldData.map(footballField => <FootballFieldCard
          key={footballField._id}
          name={footballField.name}
          grassType={footballField.grassType}
          players={footballField.players}
          imgUrl={footballField.imgUrl}
        />)
      }
      </section>
    </>
  )
}

export default FootballFields