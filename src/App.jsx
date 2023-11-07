import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/specific/navbar/NavBar';
import Footer from './components/specific/footer/Footer';
import Administrator from './pages/Administrator/Administrator';



function App() {
  

  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path='/admin' element={<Administrator/>}/>
      </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App;
