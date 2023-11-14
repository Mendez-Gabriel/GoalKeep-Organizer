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
        <CardList/>
      </div>
    </div>
  )
}
// className='container my-3 d-flex justifi-content-center aling-items-center flex-column'
export default Gallery