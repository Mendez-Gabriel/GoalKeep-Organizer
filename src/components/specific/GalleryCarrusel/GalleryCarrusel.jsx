import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import axios from 'axios';

const GalleryCarrusel = () => {

  const url = import.meta.env.VITE_APP_URL_BASE;
  const baseurl = `${url}/gallerycarrusel`; 
  const [ galleryData, setGalleryData ] = useState([
  ]);
  

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1200, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 783, min: 500 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    const fetchCarruselData = async () => {
      try {
        const { data } = await axios.get(baseurl);
        setGalleryData(data.carruselsInfo);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCarruselData();
  }, []);
  console.log(galleryData)

  return (
    <div className={`py-5`}>
      <div className='pt-3 '>
        <Carousel responsive={responsive} infinite={true} containerClass='p-5'>
          {galleryData.map((imagenCarrusel) => (
            <div key={imagenCarrusel._id}>
              <img src={imagenCarrusel.Image} alt={imagenCarrusel.name} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default GalleryCarrusel;