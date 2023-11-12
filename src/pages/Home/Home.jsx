import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  // const navigate = useNavigate();
  
  // useEffect(() => {
  //   if(!localStorage.getItem('user')) {
  //     navigate('/user/login');
  //   }   
  // }, [])
  

  return (
    <div className='mt-5 pt-5'>
      <h1>Home</h1> 
    </div>
  )
}

export default Home;