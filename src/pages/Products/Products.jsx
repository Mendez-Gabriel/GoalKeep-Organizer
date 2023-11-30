import React from 'react';
import { useState, useEffect } from 'react';
import { card, bgOscuroMedio, createButton, inputStyles, content, containerContent, contanierContentText, contanierContentList, contanierContentListItem } from './Products.module.css';
import axios from 'axios';
import CardProducts from '../../components/specific/cardProducts/CardProducts';
import Input from '../../components/general/input/Input';
import Dropdown from '../../components/specific/dropdown/Dropdown';
import ButtonDropdown from '../../components/general/buttonDropdown/ButtonDropdown';
import ButtonGeneral from '../../components/general/buttonGeneral/ButtonGeneral';
import Pagination from '../../components/general/pagination/Pagination';


const Products = () => {

    const url = import.meta.env.VITE_APP_URL_BASE;
    const baseApi = `${url}/products?`;
    const baseApiCategory = `${url}/productCategory`;

    const [urlApi, setUrlApi] = useState(baseApi);
    const [products, setProducts] = useState([]);
    const [urlCategory, setUrlCategory] = useState(baseApiCategory)
    const [productCategoryData, setProductCategoryData] = useState([]);
    const [page, setPage] = useState([]);
    const [activeBtn, setActiveBtn] = useState('');

    const handleSearch = (click) => {
        console.log(click.target.value)
        setActiveBtn(click.target.value);
        const Search = `${baseApi}name=${click.target.value}`;
        setUrlApi(Search);
    };

    const handleFilter = (searchValue) => {
        const Search = `${baseApi}productCategory=${searchValue}`;
        console.log(Search);
        setUrlApi(Search);
    };

    useEffect(() => {
        axios.get(urlCategory)
            .then(({ data }) => {
                setProductCategoryData(data.products)
            })
            .catch((err) => { console.log(err) })
    }, []);

    useEffect(() => {
        axios.get(urlApi)
            .then(({ data }) => {
                setPage(data.info.totalPages);
                setProducts(data.info.docs);
            })
            .catch((err) => { console.log(err) })
    }, [urlApi]);

    return (
        <>
            <div className={`flex-column mt-5 pt-5 ${bgOscuroMedio}`}>
                <div className='flex-column justify-content-center'>
                    <div className={`d-flex justify-content-center mb-4`}>
                        <Input type={'text'} setSearchProduct={handleSearch} placeholder={'Buscar Productos'} inputStyles={inputStyles} />
                    </div>
                    <select className={`d-flex justify-content-center mx-auto  my-3 w-50 ${inputStyles}`} name='productCategory' aria-label="Large select example"
                        onChange={(e) => { handleFilter(e.target.value) }} required>
                        <option defaultValue>Categoria</option>
                        {
                            productCategoryData.map((category) =>
                                <option key={category._id} value={category._id}>{category.name}</option>
                            )
                        }
                    </select>
                    <div className='d-flex justify-content-center my-3'>
                        <ButtonGeneral text={'Borrar filtros'} buttonStyle={`bg-danger text-light m-3 ${createButton}`} click={() => { handleFilter('') }} />
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
};

export default Products;