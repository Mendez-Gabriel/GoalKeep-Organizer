import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/specific/navbar/NavBar';
import Footer from './components/specific/footer/Footer';
import FootballFields from './pages/FootballFields/FootballFields';
import Home from './pages/Home/Home';
import Products from './pages/products/Products';
import ErrorPage from './pages/Error/ErrorPage';
import ProductItem from './pages/productItem/ProductItem';

function App() {

  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/canchas' element={<FootballFields/>}/>
        <Route path='/products' Component={Products}/>
        <Route path='/product/:id' Component={ProductItem}/>
        <Route path='*' Component={ErrorPage}/>
      </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App;
