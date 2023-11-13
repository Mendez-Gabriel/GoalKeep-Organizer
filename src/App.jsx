import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/specific/navbar/NavBar';
import Footer from './components/specific/footer/Footer';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import ErrorPage from './pages/Error/ErrorPage';
import ProductItem from './pages/productItem/ProductItem';
import Login from './components/specific/login/Login';
import Register from './components/specific/register/Register';
import { useState, useEffect } from 'react';

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    const userStorage = localStorage.getItem('user');
    if(userStorage){
      setUser(JSON.parse(userStorage));
    }
  
  }, []);

  

  return (
    <BrowserRouter>
    <NavBar setUser={setUser} user={user}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/product/:id' element={<ProductItem  user={user}/>}/>
        <Route path='/user/login' element={<Login setUser={setUser} user={user}/>} />
        <Route path='/user/register' element={<Register/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App;
