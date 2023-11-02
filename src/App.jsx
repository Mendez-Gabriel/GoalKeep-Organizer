import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/specific/navbar/NavBar';
import Footer from './components/specific/footer/Footer';
import Home from './pages/Home/Home';
import Products from './pages/products/Products';
import ErrorPage from './pages/Error/ErrorPage';

function App() {
  

  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/products' Component={Products}/>
        <Route path='*' Component={ErrorPage}/>
      </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App;
