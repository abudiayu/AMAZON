
import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Landing from './components/Pages/Landing/Landing';
import Auth from './components/Pages/Auth/Auth';
import Payment from './components/Pages/Payment/Payment';
import Order from './components/Pages/Order/Order';
import Cart from './components/Pages/Cart/Cart';
import Results from "./components/Pages/Results/Result";
import ProductDetail from "./components/Pages/ProductDetail/ProductDetail";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import ProtectedRouting from './components/Pages/ProtectedRouting/ProtectedRouting';
const stripePromise = loadStripe(
  "pk_test_51Sd8oV73eHHIhNhmzMQiLcXh7rKw7SACSCJ1X5guHh8bPcHH4u6QMnCOoVRjTqpIwZYWxVDStWAmwCToboe0Q3O200dwi35pvw"
);


function Routing() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/auth' element={<Auth/>}/>
            <Route path='/payment' element={
              <ProtectedRouting msg={"You must log in to pay !"} redirect={"/payment"}>

                <Elements stripe={stripePromise}>
                  <Payment/>
                </Elements>
              </ProtectedRouting>
              }/>
            <Route path='/order' element={
              <ProtectedRouting msg={"You must log in to access your orders!"} redirect={"/order"}>
                <Order/>
              </ProtectedRouting>
              }/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/category/:categoryName' element={<Results/>}/>
            <Route path='/products/:productId' element={<ProductDetail/>}/>

        </Routes> 
    </Router>
  )
}

export default Routing;
