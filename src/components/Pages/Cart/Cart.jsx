import React, { useContext } from 'react';
import LayOut from '../../LayOut/LayOut';
import classes from "./cart.module.css";
import { DataContext } from '../../DataProvider/DataProvider';
import ProductCard from "../../Product/ProductCard";
import CurrencyFormat from "../../CurrencyFormat/CurrencyFormat";
import { Link } from 'react-router-dom';

function Cart() {

  const [{basket,user}, dispatch] = useContext(DataContext);
  const total = basket.reduce((amount,item)=>{
    return item.price * item.amount + amount // check it???. tomorow.
  },0)

  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.cart_container}>
        <h2>Hellow </h2>
            <h3>Your shopping basket </h3>
            <hr />
            {
              basket?.length==0?(<p>OPPS! No item in your Cart</p>):(
                basket?.map((item,i)=>{
                  return <ProductCard
                  key={i}
                    product={item}
                    renderDesc={true}
                    renderAdd={false}
                    flex={true}
                  />
                })
              )
            }
        </div>

        {
          basket?.length!==0&&(
            <div className={classes.subtotal}>
              <div>
                <p>Subtotal ({basket?.length} items)</p>
                <CurrencyFormat amount={total}/>
              </div>
              <span>
                <input type="checkbox" /> 
                <small>The order contains a gift</small>
              </span>    
              <Link to ="/payment"  >Coutinue to checkbox</Link>        
            </div>

          )
        }
      </section>
      
      
    </LayOut>
  )
}

export default Cart
