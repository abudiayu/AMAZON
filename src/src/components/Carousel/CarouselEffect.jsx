import React from 'react';
import {Carousel} from "react-responsive-carousel";
import {img} from "./img/data";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import classes from "./carsousel.module.css";

function CarouselEffect() {
  return (
    <>
<Carousel
      autoPlay = {true}
      infiniteLoop ={true}
      showIndicators ={false}
      showThumbs ={false}
>
        {
            img.map((imageItemLink)=>{
                return <img key={imageItemLink} src={imageItemLink} alt="Carousel images" />
            })
        }

</Carousel>
        <div className={classes.hero_img}></div>
    </>
  )
}

export default CarouselEffect;
