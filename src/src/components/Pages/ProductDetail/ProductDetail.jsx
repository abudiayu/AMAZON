import React, { useEffect, useState } from 'react';
import classes from './productDetail.module.css';
import LayOut from '../../LayOut/LayOut';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../../Api/endPoints';
import ProductCard from '../../Product/ProductCard';
import Loader from "../../Loader/Loding";

function ProductDetail() {
  const {productId} = useParams()
  const [product, setProduct] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  useEffect(()=>{
    setIsLoading(true)
    axios.get(`${productUrl}/products/${productId}`)
    .then((res)=>{
      setProduct(res.data)
      setIsLoading(false)
    }).catch((err)=>{
      console.log(err)
      setIsLoading(false)
    })
  }, [])
  return (
    <LayOut>
      {isLoading?(<Loader/>):(<ProductCard  
        product = {product}  // if productu kale render areg kelele loaderinge render areg
        flex={true}  
        renderDesc ={true}   
        renderAdd={true}    
      /> )}
    </LayOut>

  )
}

export default ProductDetail;
