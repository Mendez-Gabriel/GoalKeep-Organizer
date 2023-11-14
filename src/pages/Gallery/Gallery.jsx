import React from 'react'
import GalleryCarrusel from '../../components/specific/GalleryCarrusel/GalleryCarrusel'
import CardList from '../../components/specific/GalleryCards/CardList'


const Gallery = () => {
  return (
    <div>
      <div>
        <GalleryCarrusel/>
      </div>
      <div>
        <SlideCarrusel/>
      </div>
      <div>
        <CardList/>
      </div>
    </div>
  );
};

export default Gallery;