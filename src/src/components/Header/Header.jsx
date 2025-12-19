import React, { useContext } from 'react';
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import classes from "./header.module.css";
import { SlLocationPin } from "react-icons/sl";
import LowerHeader from './LowerHeader';
import {Link} from 'react-router-dom';
import { DataContext } from '../DataProvider/DataProvider';
import { auth } from '../../Utility/firebase';

const Header=()=> {

  const [{user, basket}, dispatch] = useContext(DataContext)
  const totalItem = basket?.reduce((amount,item)=>{
  return item.amount + amount
  },0)

  return (
    <section className={classes.fixed}>
      <section>
        <div className={classes.header_container} >

          {/* Left side - Logo & Delivery */}
          <div className={classes.logo_container} >
            <Link to="/">
              <img className={classes.logo_img}
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                alt="amazon logo" 
              />
            </Link>

            {/* Delivery */}
            <div className={classes.delivery}>
              <span >
            <SlLocationPin style={{ paddingLeft: "18px" }} size={20} />
              </span>
              <div style={{ paddingRight: "10px" }} className={classes.delivery_eth}>
                <p>Deliver to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className={classes.search}>
            <select>
              <option value="">All</option>
            </select>

            <input type="text" placeholder="search product" />
          <BsSearch size={25}  />
          </div>

          {/* Right side links */}
          <div className={classes.order_container}>
            <Link to='/' className={classes.language}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Flag_of_Ethiopia.svg/1024px-Flag_of_Ethiopia.svg.png" alt=""/>
              <select>
                <option value="">EN</option>
              </select>
            </Link>

            {/* Account */}
            <Link to={!user &&"/auth"}>
              <div>
                {
                  user ? (
                    <>
                     <p>Hello, {user?.email?.split("@")[0]}</p>
                     <span onClick={()=> auth.signOut()}>Sign Out</span>
                    </>
                  
                  ) :(
                    <>
                      <p>Hello, Sign In</p>
                      <span>Account & Lists</span>
                    </> 
                  )}
              </div>
            </Link>

            {/* Orders */}
            <Link to="/order">
              <div>
                <p>Returns</p>
                <span>& Orders</span>
              </div>
            </Link>

            {/* Cart */}
            <Link to="/cart" className={classes.cart}>
              <BiCart size={45}/>
              <span>{totalItem}</span>
            </Link>

          </div>
        </div>
      </section>
      <LowerHeader />
    </section>  
  )
}


export default Header;
