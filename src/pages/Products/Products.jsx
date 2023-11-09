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

	const url = import.meta.env.VITE_APP_URL_BASE_PRODUCTS
	const BaseApi = `${url}products?`;

	const [products, setProducts] = useState([]);
	const [urlApi, setUrlApi] = useState(BaseApi);
	const [page, setPage] = useState([]);
	const [activeBtn, setActiveBtn] = useState('');

	//Vinculacion de Front y Backend
	const [dataForm, setDataForm] = useState({
		name: '',
		description: '',
		brand: '',
		Image: '',
		price: '',
		available: false,
		productCategory: ''
	});

	const handleForm = (event) => {
		const { value, name, type } = event.target

		let newValue;

		if (type === 'checkbox') {
			newValue = !dataForm.available;
		} else {
			newValue = value;
		}

		setDataForm((dataForm) => ({
			...dataForm,
			[name]: newValue
		}));
	};

	useEffect(() => {
	}, [dataForm]);

	const handleSubmit = (event) => {
		event.preventDefault();

		console.log(dataForm);

		axios.post(BaseApi, dataForm)
			.then((responese) => { console.log(responese) })
			.catch((error) => { console.log(error) })
			.finally(() => { console.log('Peticion Finalizada') })
	}


	//Fin de Vinculacion de Front y Backend

	const handleSearch = (click) => {
		console.log(click.target.value)
		setActiveBtn(click.target.value);
		const Search = `${BaseApi}name=${click.target.value}`;
		setUrlApi(Search);
	}


	useEffect(() => {
		axios.get(urlApi)
			.then(({ data }) => {
				setPage(data.info.totalPages);
				setProducts(data.info.docs);
			})
			.catch((err) => { console.log(err) })
	}, [urlApi])


	return (
		<>
			<div className={`flex-column mt-5 pt-5 ${bgOscuroMedio}`}>

				<h1 className='text-center fst-italic text-warning mb-5'>Nuestros productos</h1>

				<div className='flex-column justify-content-center'>
					<div className='d-flex justify-content-center'>
						<Input type={'text'} setSearchProduct={handleSearch} placeholder={'Buscar Productos'} />
					</div>


					{/* Comienzo de mi front modal */}

					<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">abrir input</button>
					<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div className="modal-dialog">
							<div className="modal-content">
								<div className="modal-header">
									<h1 className="modal-title fs-5" id="exampleModalLabel">Agregar un producto</h1>
									<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
								</div>
								<div className="modal-body">
									<form onSubmit={handleSubmit}>
										<div className="mb-3">
											<Input type={'text'} setSearchProduct={handleForm} name={'name'} placeholder={'Nombre de Producto'} />
										</div>
										<div className="mb-3">
											<Input type={'text'} setSearchProduct={handleForm} name={'description'} placeholder={'Descripcion'} />
										</div>
										<div className="mb-3">
											<Input type={'text'} setSearchProduct={handleForm} name={'brand'} placeholder={'Marca'} />
										</div>
										<div className="mb-3">
											<Input type={'url'} setSearchProduct={handleForm} name={'Image'} placeholder={'URL de imagen'} />
										</div>
										<div className="mb-3">
											<Input type={'number'} setSearchProduct={handleForm} name={'price'} placeholder={'Precio'} />
										</div>
										{/* <div class="form-floating">
                                            <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                                                <option selected>Open this select menu</option>
                                                <option value="1">Pelotas</option>
                                                <option value="2">Camisetas</option>
                                                <option value="3">Pantalones</option>
                                                <option value="3">Botines</option>
                                            </select>
                                            <label for="floatingSelect">Works with selects</label>
                                        </div> */}
										<div className="mb-3">
											<Input type={'text'} setSearchProduct={handleForm} name={'productCategory'} placeholder={'Id de Categoria'} />
										</div>
										<div className="form-check form-switch mb-3">
											<input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onChange={(event) => handleForm(event)} name={'available'} />
											<label className="form-check-label" htmlFor="flexSwitchCheckChecked">Diponibilidad</label>
										</div>
										<div>
											<button type="submit" className="btn btn-primary" >Agregar Producto</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>

					{/* Fin de mi front modal */}


					<div className='d-flex justify-content-center mt-3'>
						<ButtonGeneral text={'Borrar filtros'} buttonStyle={'bg-danger text-light btn-sm m-3'} click={() => { handleSearch('') }} />
					</div>
					<div className='d-flex justify-content-center'>
						<Dropdown text={'Accesorios'} dropdownStyle={'btn-secondary'} />
						<div className="dropdown-menu">
							<ButtonDropdown text={'Pelotas'} click={() => handleSearch('pelota')} buttonStyle={activeBtn === 'pelota' ? 'active' : ''} />
						</div>
						<Dropdown text={'Indumentaria'} dropdownStyle={'btn-secondary'} />
						<div className="dropdown-menu">
							<ButtonDropdown text={'Camisetas'} click={() => { handleSearch('Camiseta') }} buttonStyle={activeBtn === 'Camiseta' ? 'active' : ''} />
							<ButtonDropdown text={'Pantalones'} click={() => { handleSearch('pantalones') }} buttonStyle={activeBtn === 'pantalones' ? 'active' : ''} />
							<ButtonDropdown text={'Botines'} click={() => { handleSearch('botines') }} buttonStyle={activeBtn === 'botines' ? 'active' : ''} />
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
						BaseApi={BaseApi}
					/>
				</div>
			</div>

		</>
	)
}

export default Products;