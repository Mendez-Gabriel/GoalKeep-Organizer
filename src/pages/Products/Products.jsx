import React from 'react';
import { useState, useEffect } from 'react';
import { card } from './Products.module.css'
import axios from 'axios';
import CardProducts from '../../components/specific/cardProducts/CardProducts';
import Input from '../../components/general/input/input';

const Products = () => {

    const BaseApi = 'http://127.0.0.1:8000/products';

    const [products, setProducts] = useState([]);
    const [searchProduct, setSearchProduct] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        axios.get(BaseApi)
            .then(({ data }) => {
                setProducts(data.allProducts);
                setFilteredProducts(data.allProducts);
            })
            .catch((err) => { console.log(err) })
    }, [])

    useEffect(() => {
        const results = products.filter(product =>
            product.name.toLowerCase().includes(searchProduct.toLowerCase())
        );
        setFilteredProducts(results);
    }, [searchProduct, products]);


    return (
        <>
            <div className='flex-column my-5 pt-5'>
                <h1 className='text-center'>Nuestros productos</h1>
                <div className='d-flex justify-content-center'>
                    <Input setSearchProduct={setSearchProduct} placeholder={'Buscar Productos'} />
                </div>
                <div className='container d-flex justify-content-center'>
                    <div className='row m-3'>
                        {
                            filteredProducts.map((product) => (
                                <div className={`d-flex col-12 col-sm-6 col-xl-4 mx-auto my-3 ${card}`} key={product.id}>
                                    <CardProducts products={product} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default Products;