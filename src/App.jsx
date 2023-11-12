import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/specific/navbar/NavBar';
import Footer from './components/specific/footer/Footer';
import Gallery from './pages/Gallery/Gallery';
import Administrator from './pages/Administrator/Administrator';
import AboutUs from './components/specific/aboutUs/AboutUs';
import CardsIntegrantes from './components/specific/Integrantes/Integrantes';
import FootballFields from './pages/FootballFields/FootballFields';
import Home from './pages/Home/Home';
import Products from './pages/products/Products';
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

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };


  return (
    <BrowserRouter>
    {user && <NavBar handleLogout={handleLogout}/>}
      <Routes>
        <Route path='/' element={user ? <Home/> : <Login setUser={setUser}/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/canchas' element={<FootballFields/>}/>
        <Route path='/galeria' element={<Gallery/>}/>
        <Route path='/about' Component={AboutUs}/>
        <Route path='/admin' element={<Administrator/>}/>
        <Route path='/Fundadores' Component={CardsIntegrantes}/>
        <Route path='/product/:id' element={<ProductItem/>}/>
        <Route path='/user/login' element={<Login setUser={setUser}/>} />
        <Route path='/user/register' element={<Register/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    {user && <Footer/>}
    </BrowserRouter>
  )
}

export default App;
