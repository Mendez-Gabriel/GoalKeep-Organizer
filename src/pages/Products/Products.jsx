import React from 'react';
import { useState, useEffect } from 'react';
import { card, bgOscuroMedio } from './Products.module.css'
import axios from 'axios';
import CardProducts from '../../components/specific/cardProducts/CardProducts';
import Input from '../../components/general/input/input';
import Dropdown from '../../components/specific/dropdown/Dropdown';
import ButtonDropdown from '../../components/general/buttonDropdown/ButtonDropdown';
import ButtonGeneral from '../../components/general/buttonGeneral/ButtonGeneral';
import Pagination from '../../components/general/pagination/Pagination';


const Products = () => {

    const url = import.meta.env.VITE_APP_URL_BASE
    const baseApi = `${url}/products?`;

    const [products, setProducts] = useState([]);
    const [urlApi, setUrlApi] = useState(baseApi);
    const [page, setPage] = useState([]);
    const [activeBtn, setActiveBtn] = useState('');

    const handleSearch = (click) => {
        console.log(click.target.value)
        setActiveBtn(click.target.value);
        const Search = `${baseApi}name=${click.target.value}`;
        setUrlApi(Search);
    };

    const handleFilter = (searchValue) => {
        console.log(searchValue);
        const Search = `${baseApi}name=${searchValue}`;
        setUrlApi(Search);
    };


    useEffect(() => {
        axios.get(urlApi)
            .then(({ data }) => {
                setPage(data.info.totalPages);
                setProducts(data.info.docs);
            })
            .catch((err) => { console.log(err) })
    }, [urlApi])
    console.log(products)

    return (
        <>
            <div className={`flex-column mt-5 pt-5 ${bgOscuroMedio}`}>

                <h1 className='text-center fst-italic text-warning mb-5'>Nuestros productos</h1>

                <div className='flex-column justify-content-center'>
                    <div className='d-flex justify-content-center'>
                        <Input type={'text'} setSearchProduct={handleSearch} placeholder={'Buscar Productos'} />
                    </div>
                    <div className='d-flex justify-content-center mt-3'>
                        <ButtonGeneral text={'Borrar filtros'} buttonStyle={'bg-danger text-light btn-sm m-3'} click={() => { handleFilter('') }} />
                    </div>
                    <div className='d-flex justify-content-center'>
                        <Dropdown text={'Accesorios'} dropdownStyle={'btn-secondary'} />
                        <div className="dropdown-menu">
                            <ButtonDropdown text={'Pelotas'} click={() => handleFilter('pelota')} buttonStyle={activeBtn === 'pelota' ? 'active' : ''} />
                        </div>
                        <Dropdown text={'Indumentaria'} dropdownStyle={'btn-secondary'} />
                        <div className="dropdown-menu">
                            <ButtonDropdown text={'Camisetas'} click={() => { handleFilter('camiseta') }} buttonStyle={activeBtn === 'Camiseta' ? 'active' : ''} />
                            <ButtonDropdown text={'Pantalones'} click={() => { handleFilter('short') }} buttonStyle={activeBtn === 'pantalones' ? 'active' : ''} />
                            <ButtonDropdown text={'Botines'} click={() => { handleFilter('botines') }} buttonStyle={activeBtn === 'botines' ? 'active' : ''} />
                        </div>
                    </div>
                </div>


                <div className='container d-flex justify-content-center'>
                    <div className='row m-3 w-100 justify-content-center'>
                        {
                            products.map((product) => (
                                <div className={`d-flex justify-content-center col-9 col-sm-6 col-lg-4 col-xl-4 my-3 ${card}`} key={product._id}>
                                    <CardProducts products={product} />
                                </div>
                            ))
                        }
                    </div>
                </div>


                <div className='d-flex justify-content-center'>
                    <Pagination
                        totalPages={page}
                        setUrlApi={setUrlApi}
                        baseApi={baseApi}
                    />
                </div>
            </div>

        </>
    )
}

export default Products;