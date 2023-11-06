import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/specific/navbar/NavBar';
import Footer from './components/specific/footer/Footer';
import FootballFields from './pages/FootballFields/FootballFields';

function App() {
  

  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path='/canchas' element={<FootballFields/>}/>
      </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App;
