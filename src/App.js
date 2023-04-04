

import './App.css';
import Catalogue from './Components/Catalogue/Catalogue';
import Header from './Components/Header/Header';
import MainPhoto from './Components/MainPhoto/MainPhoto';
import Menu from './Components/Menu/Menu';
import Performance from './Components/Performance/Performance';
import Brands from './Components/Brands/Brands';
import Advantages from './Components/Advantages/Advantages';
import Footer from './Components/Footer/Footer';
import Values from './Components/Values/Values';
import Indicators from './Components/Indicators/Indicators';

function App() {
  return (
    <div className="App">
       <Header />
       <MainPhoto />
       <Menu />
       <Catalogue />
       <Performance />
       <Brands />
       <Advantages />
       <Indicators />
       <Values />

       <Footer/>
       
    </div>
  );
}

export default App;
