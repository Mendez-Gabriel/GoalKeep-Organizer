import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/specific/navbar/NavBar';
import Footer from './components/specific/footer/Footer';
import AboutUs from './components/specific/aboutUs/AboutUs';
import CardsIntegrantes from './components/specific/Integrantes/Integrantes';

function App() {
  

  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path='/about' Component={AboutUs}/> 
        <Route path='/Fundadores' Component={CardsIntegrantes}/>       
      </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App;
