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
import Cart from './PAGES/Cart/Cart';
import UserProfile from './PAGES/User/UserProfile';
import Faq from './PAGES/Extra/Faq';
import PrivacyPolicy from './PAGES/Extra/PrivacyPolicy';
import TandC from './PAGES/Extra/TandC';

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
          <Route path='/cart' element= {<Cart/>}/>
          <Route path ='/user/:activepage' element={<UserProfile/>}/>
          <Route path = '/faq' element = {<Faq/>}/>
          <Route path = '/privacynpolicy' element= {<PrivacyPolicy/>}/>
          <Route path = '/tnc' element= {<TandC/>}/>
          <Route path='/*' element= {<div> ERROR 404 PAGE NOT FOUND </div>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
