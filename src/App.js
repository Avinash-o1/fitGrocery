import {BrowserRouter , Route , Routes} from 'react-router-dom'
import './App.css';
import Home from './PAGES/HomePage/Home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<Home/>} ></Route>
          <Route path='/home' element= {<Home/>} ></Route>
          <Route path='/*' element= {<div> ERROR 404 PAGE NOT FOUND </div>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
