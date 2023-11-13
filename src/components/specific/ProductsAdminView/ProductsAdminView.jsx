import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { createButton, tableSection} from '../FootballFieldAdminView/FootballFieldAdminView.module.css';
import { Trash3Fill, PenFill, XCircle, CheckCircle } from 'react-bootstrap-icons';

const ProductsAdminView = () => {

  const urlBase = 'http://localhost:8080'
  const [reload, setReload] = useState(false);
  const [productData, setProductData] = useState([]);
  const [productCategoryData, setProductCategoryData] = useState([]);
  const [dataForm, setDataForm] = useState({
    name:'',
    description:'',
    brand:'',
    productCategory:'',
    price:'',
    Image:'',
    available:false    
  });
  const [selectedPRoduct, setSelectedPRoduct] = useState({...dataForm,_id:''})
  const [categoryDataForm, setCategoryDataForm] = useState(null);
  const [newName, setnewName] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newBrand, setNewBrand] = useState('');
  const [newProductCategory, setNewProductCategory] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [newImage, setNewImage] = useState('');
  const [newAvailable, setNewAvailable] = useState(true);

  const handleCategoryFormChange = (e) =>{
    const { name, value } = e.target;
    setCategoryDataForm({ name : value });
  }
  const handleProductFormChange = (e) => {
    const { name, value } = e.target;
    let newValue;

		if (name === 'available') {
			newValue = !dataForm.available;
		} else {
			newValue = value;
		}
    setDataForm((dataForm)=>({
      ...dataForm, [name]:newValue
    }))
  }


  const handleSubmit = async (e,isCategory) => {
    e.preventDefault();
    if(isCategory){
      if(confirm('Desea Agregar esta categoria?')){
        try {
          const { data } = await axios.post(`${urlBase}/productCategory`,categoryDataForm);
          console.log(data)
        } catch (error) {
          console.log(error)
        }
      }else alert('Operacion cancelada')
    }else{
      try {
        const { data } = await axios.post(`${urlBase}/products`,dataForm);
        console.log( {creado: data.newProduct } );
      } catch (error) {
        console.log(error);
      };
    }
    setReload(!reload);
  }
  const handleDelete = async(id) => {
    if(confirm('Desea eliminar el producto?')){
      try {
        const response = await axios.delete(`${urlBase}/products/${id}`);
        console.log(response.data)
      } catch (error) {
        console.log(error)
      }
      alert('Producto eliminado con exito.')
      setReload(!reload);
    }else alert('Operacion cancelada.');
  }
  const handleUpdate = async (e,id) => {
    e.preventDefault();
    if(confirm('Desea actualizar el producto?')){
      let query = {
      name: newName,
      description: newDescription,
        brand: newBrand,
        productCategory : newProductCategory,
        price: newPrice,
        Image: newImage,
        available: newAvailable
      };
  
      try {
        const { data } = await axios({
          method:'put',
          data: query,
          url: `${urlBase}/products/${id}`
        });
        console.log(data);
      } catch (error) {
        console.log(error);
      };
      alert('Producto actualizado exitosamente.')
      setReload(!reload);
    }else alert('Operacion cancelada.')
  }

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const { data } = await axios.get(`${urlBase}/products`,{});
        setProductData(data.results);
      } catch (error) {
        console.log(data)
      }
    }
    const fetchProductCategoryData = async () => {
      try {
        const { data } = await axios.get(`${urlBase}/productCategory`);
        setProductCategoryData( data.products );
      } catch (error) {
        console.log(error);
      }
    }
    fetchProductCategoryData();
    fetchProductsData();
    
  }, [reload])
  useEffect(() => {
    setnewName(selectedPRoduct.name);
    setNewDescription(selectedPRoduct.description);
    setNewBrand(selectedPRoduct.brand);
    setNewPrice(selectedPRoduct.price);
    setNewProductCategory(selectedPRoduct.productCategory);
    setNewAvailable(selectedPRoduct.available);
    setNewImage(selectedPRoduct.Image);
  }, [selectedPRoduct]);
  
  return (
    <>
      <div className='row gap-3 justify-content-center'>
        <button type="button" className={`col-10 col-md-4 ${createButton}`} data-bs-toggle="modal" data-bs-target="#productCreationModal">
          Agregar un producto
        </button>
        <button type="button" className={`col-10 col-md-4 ${createButton}`} data-bs-toggle="modal" data-bs-target="#productCategoryCreationModal">
          Agregar una Categoria de Productos
        </button>
        
        <div className="modal fade" id="productCategoryCreationModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">Crear Categoria</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form id='categoryCreationForm' onSubmit={(e)=>handleSubmit(e,true)}>
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" name='name' id="nameInput" placeholder="name@example.com"
                      onChange={(e) => handleCategoryFormChange(e)} required />
                    <label htmlFor="nameInput">Nombre Categoria</label>
                  </div>
                  <div className='row gap-3 gap-md-0 justify-content-around'>
                    <button type="button" className={`col-10 col-md-4 ${createButton}`} data-bs-dismiss="modal">Cerrar</button>
                    <button type="submit" className={`col-10 col-md-4 ${createButton}`} htmlFor='#categoryCreationForm'>Guardar Categoria</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        
        <div className="modal fade" id="productCreationModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="productCreationModalLabel">Crear Producto</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form id='productCreationForm' onSubmit={(e) => { handleSubmit(e,false) }}>
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" name='name' id="nameInput" placeholder="name@example.com"
                      onChange={(e) => { handleProductFormChange(e) }} required />
                    <label htmlFor="nameInput">Nombre</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" name='description' id="descriptionInput" placeholder="name@example.com"
                      onChange={(e) => { handleProductFormChange(e) }} required />
                    <label htmlFor="nameInput">Descripcion</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" name='brand' id="brandInput" placeholder="name@example.com"
                      onChange={(e) => { handleProductFormChange(e) }} required />
                    <label htmlFor="nameInput">Marca</label>
                  </div>
                  <select className="form-select form-select-md mb-3" name='productCategory' aria-label="Large select example"
                    onChange={(e) => { handleProductFormChange(e) }} required>
                    <option defaultValue>Categoria</option>
                    {
                      productCategoryData.map((category)=>
                        <option key={category._id} value={category._id}>{category.name}</option>
                      )
                    }
                  </select>
                  <div className="form-floating mb-3">
                    <input type="number" className="form-control" name='price' id="priceInput" placeholder="name@example.com"
                      onChange={(e) => { handleProductFormChange(e) }} required/>
                    <label htmlFor="imgUrlInput">Precio</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" name='Image' id="imgUrlInput" placeholder="name@example.com"
                      onChange={(e) => { handleProductFormChange(e) }} required/>
                    <label htmlFor="imgUrlInput">URL Imagen</label>
                  </div>
                  <div className="form-check form-switch mb-3">
											<input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onChange={(e) => {handleProductFormChange(e)}} name={'available'} />
											<label className="form-check-label" htmlFor="flexSwitchCheckChecked">Diponibilidad</label>
										</div>
                  <div className='row gap-3 gap-md-0 justify-content-around'>
                    <button type="button" className={`col-10 col-md-4 ${createButton}`} data-bs-dismiss="modal">Cerrar</button>
                    <button type="submit" className={`col-10 col-md-4 ${createButton}`} htmlFor='#productCreationForm'>Guardar Producto</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="productUpdateModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="productUpdateModalLabel">Actualizar Producto</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form id='productUpdateForm' onSubmit={(e) => handleUpdate(e,selectedPRoduct._id)}>
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" name='name' id="nameInput" placeholder="name@example.com"
                      onChange={(e) => { setnewName(e.target.value) }} value={newName} />
                    <label htmlFor="nameInput">Nombre</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" name='description' id="descriptionInput" placeholder="name@example.com"
                      onChange={(e) => { setNewDescription(e.target.value) }}value={newDescription}  />
                    <label htmlFor="nameInput">Descripcion</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" name='brand' id="brandInput" placeholder="name@example.com"
                      onChange={(e) => { setNewBrand(e.target.value) }} value={newBrand} />
                    <label htmlFor="nameInput">Marca</label>
                  </div>
                  <select className="form-select form-select-md mb-3" name='productCategory' aria-label="Large select example"
                    onChange={(e) => { setNewProductCategory(e.target.value) }} value={newProductCategory}>
                    <option value={newProductCategory}>Categoria</option>
                    {
                      productCategoryData.map((category)=>
                        <option key={category._id} value={category._id}>{category.name}</option>
                      )
                    }
                  </select>
                  <div className="form-floating mb-3">
                    <input type="number" className="form-control" name='price' id="priceInput" placeholder="name@example.com"
                      onChange={(e) => { setNewPrice(e.target.value) }} value={newPrice} />
                    <label htmlFor="imgUrlInput">Precio</label>
                  </div>
                  <div className="form-floating mb-3">
                    <img src={newImage} alt={newName} className='img-fluid'/>
                    <input type="text" className="form-control" name='Image' id="imgUrlInput" placeholder="name@example.com"
                      onChange={(e) => { setNewImage(e.target.value) }} value={newImage} />
                    <label htmlFor="imgUrlInput">URL Imagen</label>
                  </div>
                  <div className="form-check form-switch mb-3">
                    {
                      newAvailable?
                      <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onChange={(e) => {setNewAvailable(!newAvailable)}} name={'available'} checked/>
											:
                      <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onChange={(e) => {setNewAvailable(!newAvailable)}} name={'available'} />
                    }
											<label className="form-check-label" htmlFor="flexSwitchCheckChecked">{newAvailable?'Declarar faltante':'Declarar en stock'}</label>
										</div>
                  <div className='row gap-3 gap-md-0 justify-content-around'>
                    <button type="button" className={`col-10 col-md-4 ${createButton}`} data-bs-dismiss="modal">Cerrar</button>
                    <button type="submit" className={`col-10 col-md-4 ${createButton}`} htmlFor='#productUpdateForm'>Guardar Cambios</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

      <div className={`col-12 col-md-9 mx-0 px-0 py-4 p-md-4 ${tableSection}`}>
        <table className="table table-striped table-centered mb-0">
          <thead>
            <tr>
              <th>Producto</th>
              <th className='d-none d-md-block'>Descripcion</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              productData.map((product)=>(
                <tr key={product._id}>
                  <td className="table-user">
                    {product.name}
                  </td>
                  <td className='d-none d-md-block'>{product.description}</td>
                  <td>{product.price}</td>
                  <td>{product.available?<CheckCircle size={25} color='#2196F3'/>:<XCircle size={25} color='#c21d03'/>}</td>
                  <td>
                    <PenFill color='#2E8B57' size={25} role='button' onClick={()=>setSelectedPRoduct(product)} data-bs-toggle="modal" data-bs-target="#productUpdateModal"/>
                    <Trash3Fill color='#c21d03' size={25} role='button' onClick={()=>handleDelete(product._id)}/>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ProductsAdminView