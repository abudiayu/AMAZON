import React, { useEffect, useState } from 'react';
import classes from "./result.module.css";
import LayOut from '../../LayOut/LayOut';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../../Api/endPoints';
import ProductCard from '../../Product/ProductCard';
import Loader from "../../Loader/Loding";

function Result() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const { categoryName } = useParams();

  useEffect(() => {
    setIsLoading(true)
    axios.get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false)
      });
  }, [categoryName]); 

  return (
    <LayOut>
      {
        isLoading?(<Loader/>):(<section> 
            <h1 style={{padding:"30px"}}>Results</h1>
            <p style={{padding:"30px"}}>Category / {categoryName}</p>
            <hr />
            <div className={classes.products_cotainer}>
              {results.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
      </section> )
      }
         
    </LayOut>
  );
}

export default Result;
