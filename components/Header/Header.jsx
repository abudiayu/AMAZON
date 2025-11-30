import React from 'react'
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import classes from "./Header.module.css";
import { SlLocationPin } from "react-icons/sl";

function Header() {
  return (
    <section>
      <div className={classes.header_container} >

        {/* Left side - Logo & Delivery */}
        <div className={classes.logo_container} >
          <a href="/">
            <img className={classes.logo_img}
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" 
              alt="amazon logo" 
            />
          </a>

          {/* Delivery */}
          <div className={classes.delivery}>
            <span >
           <SlLocationPin style={{ paddingLeft: "10px" }} size={20} />
            </span>
            <div style={{ paddingRight: "10px" }}>
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
          <a href='/' className={classes.language}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Flag_of_Ethiopia.svg/1024px-Flag_of_Ethiopia.svg.png" alt=""/>
            <select>
              <option value="">EN</option>
            </select>
          </a>

          {/* Account */}
          <a href="/account">
            <div>
              <p>Sign In</p>
              <span>Account & Lists</span>
            </div>
          </a>

          {/* Orders */}
          <a href="/orders">
            <div>
              <p>Returns</p>
              <span>& Orders</span>
            </div>
          </a>

          {/* Cart */}
          <a href="/cart" className={classes.cart}>
            <BiCart size={35}/>
            <span>0</span>
          </a>

        </div>
      </div>
    </section>
  )
}


export default Header;
