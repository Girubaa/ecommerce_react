
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import Shopcategory from './Pages/Shopcategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/men_banner.jpg'
import women_banner from './Components/Assets/women_banner.jpg'
import kids_banner from './Components/Assets/kids_banner.jpg'

function App() {
  return (
    <div>
        <BrowserRouter>
        <Navbar />
            <Routes>
              <Route path='/' element={<Shop/>}/>
              <Route path='/mens' element={<Shopcategory banner={men_banner} category="men"/>} />
              <Route path='/womens' element={<Shopcategory banner={women_banner} category="women"/>} />
              <Route path='/kids' element={<Shopcategory banner={kids_banner} category="kid"/>} />
              <Route path='/products' element={<Product/>}>
                <Route path=':productId' element={<Product />}/>
              </Route>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/loginsignup' element={<LoginSignup/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
      
      
      
    </div>
  );
}

export default App;
