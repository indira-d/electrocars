

import './App.css';

import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import CarDetails from './Pages/CarDetails/CarDetails';
import CataloguePage from './Pages/CataloguePage/CataloguePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/car/:id' element={<CarDetails />} />
          <Route path='/catalogue' element={<CataloguePage />} />
        </Routes>
      </BrowserRouter>   
    </div>
  );
}

export default App;
