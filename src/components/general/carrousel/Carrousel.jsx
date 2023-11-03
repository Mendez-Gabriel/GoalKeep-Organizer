import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CardProducts from '../../specific/cardProducts/CardProducts';
import ImageLink from '../imageLink/ImageLink';

const Carrousel = ({ infoCarrousel, updateSelectedItem }) => {

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 1200 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 1200, min: 800 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 783, min: 500 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 500, min: 0 },
          items: 1
        }
      };

      const handleItemClick = (selectedItem) => {
        updateSelectedItem(selectedItem);
    };

  return (

    <div className='pb-5 mt-5'>
      <h3>Otros Productos</h3>
      <div className='pt-3 '>
        <Carousel responsive={responsive}>
          {infoCarrousel.map((product) => (
            <CardProducts products={product}  key={product._id} onItemClick={handleItemClick}/>
          ))}
        </Carousel>
      </div>
    </div>

  )
}

export default Carrousel;