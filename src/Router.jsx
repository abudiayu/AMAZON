
import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Landing from './components/Pages/Landing/Landing';
import SignIn from './components/Pages/Auth/SignUp';
import Payment from './components/Pages/Payment/Payment';
import Order from './components/Pages/Order/Order';
import Cart from './components/Pages/Cart/Cart';
import Results from "./components/Pages/Results/Result";
import ProductDetail from "./components/Pages/ProductDetail/ProductDetail";

function Routing() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/auth' element={<SignIn/>}/>
            <Route path='/payment' element={<Payment/>}/>
            <Route path='/order' element={<Order/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/category/:categoryName' element={<Results/>}/>
            <Route path='/products/:productId' element={<ProductDetail/>}/>

        </Routes> 
    </Router>
  )
}

export default Routing;
