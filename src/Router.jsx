
import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Landing from './components/pages/Landing/Landing';
import Auth from './components/pages/Auth/Auth';
import Payment from './components/pages/payment/Payment';
import Order from './components/pages/Order/Order';
import Cart from './components/pages/Cart/Cart';
import Results from "./components/pages/Results/Result";
import ProductDetail from "./components/pages/ProductDetail/ProductDetail";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import ProtectedRouting from './components/pages/ProtectedRouting/ProtectedRouting';
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
