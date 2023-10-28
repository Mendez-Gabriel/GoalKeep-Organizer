import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/specific/navbar/NavBar';
import Footer from './components/specific/footer/Footer';

function App() {
  

  return (
    <BrowserRouter>
    <NavBar />
      <Routes>

      </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App;
