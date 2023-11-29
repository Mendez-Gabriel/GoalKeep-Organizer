import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardProductsItem from '../../components/specific/cardProductsItem/CardProductsItem';
import Carrousel from '../../components/general/carrouselProducts/CarrouselProducts';
import GeneralPleaceholder from '../../components/general/generalPleaceholder/GeneralPleaceholder';


const ProductItem = ({ user }) => {
  const params = useParams();

  const url = import.meta.env.VITE_APP_URL_BASE
  const urlProducts = `${url}/products`;

  const [item, setItem] = useState([]);
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    const { data } = axios.get(`${urlProducts}?id=${params.id}`)
      .then(({ data }) => {
        setItem(data.results[0])
        setLoader(false)
      })
      .catch((err) => { console.log(err) })
  }, []);

  return (
    <>
      {loader ?
        (
          <div className='m-5 pt-5'>
            <GeneralPleaceholder />
          </div>
        )
        :
        (
          <div className={`mt-5 pt-5 `}>
            <CardProductsItem products={item} user={user} />
          </div>
        )
      }

      <div className='containter'>
        <Carrousel setItem={setItem} urlProducts={urlProducts} titleCarrousel={'QUIZÁ TAMBIÉN TE GUSTE...'} titleColor={'ms-5'} bgCarousel={'bgPhotoFutbol'} />
      </div>
    </>
  )
}

export default ProductItem;