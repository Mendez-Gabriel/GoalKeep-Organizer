import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/specific/navbar/NavBar';
import Footer from './components/specific/footer/Footer';
import Gallery from './pages/Gallery/Gallery';

function App() {
  

  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path='/galeria' element={<Gallery/>}/>
      </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App;
