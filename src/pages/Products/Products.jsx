import React from 'react';
import { useState, useEffect } from 'react';
import { card } from './Products.module.css'
import axios from 'axios';
import CardProducts from '../../components/specific/cardProducts/CardProducts';
import Input from '../../components/general/input/input';
import Dropdown from '../../components/specific/dropdown/Dropdown';
import ButtonDropdown from '../../components/general/buttonDropdown/ButtonDropdown';
import ButtonGeneral from '../../components/general/buttonGeneral/ButtonGeneral';
import Pagination from '../../components/general/pagination/Pagination';

const Products = () => {

    const url = import.meta.env.VITE_APP_URL_BASE_PRODUCTS
    const BaseApi = `${url}products`;

    const [products, setProducts] = useState([]);
    const [urlApi, setUrlApi] = useState(BaseApi)
    const [searchProduct, setSearchProduct] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [activeBtn, setActiveBtn] = useState("");
    const [page, setPage] = useState([]);

    const handleButton = (click) => {
        setSearchProduct(click);
        setActiveBtn(click);
    }

    useEffect(() => {
        axios.get(urlApi)
            .then(({ data }) => {
                setProducts(data.allProducts.docs);
                setFilteredProducts(data.allProducts.docs);
                setPage(data.allProducts);
            })
            .catch((err) => { console.log(err) })
    }, [urlApi])

    useEffect(() => {
        const results = products.filter(product =>
            product.name.toLowerCase().includes(searchProduct.toLowerCase())
        );
        setFilteredProducts(results);
    }, [searchProduct, products]);

    return (
        <>
            <div className='flex-column my-4 pt-5'>
                <h1 className='text-center'>Nuestros productos</h1>
                <div className='flex-column justify-content-center'>
                    <div className='d-flex justify-content-center'>
                        <Input setSearchProduct={setSearchProduct} placeholder={'Buscar Productos'} />
                    </div>
                    <div className='d-flex justify-content-center mt-3'>
                        <ButtonGeneral text={'Borrar filtros'} buttonStyle={'bg-danger text-light btn-sm '} click={() => { handleButton('') }} />
                    </div>
                    <div className='d-flex justify-content-center'>
                        <Dropdown text={'Accesorios'} dropdownStyle={'btn-secondary'} />
                        <div className="dropdown-menu">
                            <ButtonDropdown text={'Pelotas'} click={() => { handleButton('pelota') }} buttonStyle={activeBtn === 'pelota' ? 'active' : ''} />
                        </div>
                        <Dropdown text={'Indumentaria'} dropdownStyle={'btn-secondary'} />
                        <div className="dropdown-menu">
                            <ButtonDropdown text={'Camisetas'} click={() => { handleButton('Camiseta') }} buttonStyle={activeBtn === 'Camiseta' ? 'active' : ''} />
                            <ButtonDropdown text={'Pantalones'} click={() => { handleButton('pantalones') }} buttonStyle={activeBtn === 'pantalones' ? 'active' : ''} />
                            <ButtonDropdown text={'Botines'} click={() => { handleButton('botines') }} buttonStyle={activeBtn === 'botines' ? 'active' : ''} />
                        </div>
                    </div>
                </div>
                <div className='container d-flex justify-content-center'>
                    <div className='row m-3 w-100'>
                        {
                            filteredProducts.map((product) => (
                                <div className={`d-flex col-9 col-sm-6 col-xl-4 mx-auto my-3 ${card}`} key={product._id}>
                                    <CardProducts products={product} />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='d-flex justify-content-center'>
                    <Pagination 
                        totalPages={page.totalPages}
                        setUrlApi={setUrlApi}
                        BaseApi={BaseApi}
                    />
                </div>
            </div>

        </>
    )
}

export default Products;