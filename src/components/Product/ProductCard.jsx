import React, { useContext } from 'react';
import { Rating } from '@mui/material';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import classes from './Product.module.css';
import { Link } from 'react-router-dom';
import { DataContext } from '../DataProvider/DataProvider';
import { Type } from '../../Utility/action.type';

function ProductCard({ product, flex, renderDesc }) {
    const { id, title, price, image, rating, description } = product;

    const [state, dispatch] = useContext(DataContext)

    // console.log(state)
    const addToCart = () => {
        dispatch({
            type: Type.ADD_TO_BASKET,
            item: { 
                id, title, price, image, rating, description 
            }
        });
    };


  return (
    <div className={`${classes.card_container} ${flex?classes.product_flex : ""}`}>
        <Link to={`/products/${id}`}>
            <img src={image} alt="" />
        </Link>
        <div>
            <h3>{title}</h3>
            {renderDesc && <div style={{maxWidth:"750px"}}>{description}</div>}
            <div className={classes.rating}>
                    {/* rating */}
                <Rating value={rating?.rate ?? 0} precision={0.1} readOnly />
                    {/* rating count */}
                <small>{rating?.count ?? 0}</small>
            </div>

            <div>
                {/* price */}
                <CurrencyFormat amount={price}/>
            </div>        
            <button className={classes.button} onClick={addToCart}>
                Add to Cart
            </button>
        </div>
    </div>
  )
}

export default ProductCard;
