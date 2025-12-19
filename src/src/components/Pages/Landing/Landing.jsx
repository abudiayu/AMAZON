import React from 'react';
import LayOut from '../../LayOut/LayOut';
import CarouselEffect from '../../Carousel/CarouselEffect';
import Category from '../../Category/Category';
import Product from '../../Product/Product';
import Footer from '../../Footer/Footer';

function Landing() {
  return (
    <LayOut>
      <CarouselEffect/>
      <Category/>
      <Product/> 
      <Footer/>       
    </LayOut>
  )
}

export default Landing;
