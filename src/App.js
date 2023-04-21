import {BrowserRouter , Route , Routes} from 'react-router-dom'
import './App.css';
import Home from './PAGES/HomePage/Home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductPage from './PAGES/ProductPage/ProductPage';
import About from './PAGES/Extra/About';
import Contact from './PAGES/Extra/Contact';
import Login from './PAGES/Auth/Login';
import Signup from './PAGES/Auth/Signup';
import ForgotPaswd from './PAGES/Auth/ForgotPaswd';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<Home/>} ></Route>
          <Route path='/home' element= {<Home/>} ></Route>
          <Route path = '/product/:prodId' element={<ProductPage/>}></Route>
          <Route path = '/about' element = {<About/>}/>
          <Route path = '/contact' element= {<Contact/>}/>
          <Route path='/login' element= {<Login/>}/>
          <Route path = '/signup' element= {<Signup/>}/>
          <Route path = '/forgotpswd' element= {<ForgotPaswd/>}/>
          <Route path='/*' element= {<div> ERROR 404 PAGE NOT FOUND </div>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
