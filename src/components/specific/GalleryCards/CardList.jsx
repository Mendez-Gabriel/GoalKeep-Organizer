import React, { useState } from 'react';
import './CardList.css';
import axios from 'axios';
import { useEffect } from 'react';

function CardList() {

  const url = import.meta.env.VITE_APP_URL_BASE_PRODUCTS;
  const baseurl =  `${url}/gallerycard`;
  const [selectedImage, setSelectedImage] = useState(null);
  const [cardData, setCardData] = useState([
  ]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  useEffect(() => {
    const fetchCardData = async() => {
      try {
        const {data} = await axios.get(baseurl);
        setCardData(data.results)
      } catch (error) {
        console.log(error)
      }
    }
    fetchCardData()
  }, [])
  
  return (
    <div className="card-container">
      {cardData.map((card) => (
        <div key={card._id} className="card" onClick={() => handleImageClick(card.Image)}>
          <h2>{card.name}</h2>
          <p>{card.description}</p>
        </div>
      ))}

      {selectedImage && (
        <div className="overlay" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Imagen ampliada" />
        </div>
      )}
    </div>
  )
}

export default CardList;