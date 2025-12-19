import React, { useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import classes from "./Header.module.css";
import { Link } from 'react-router-dom';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

function LowerHeader() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={classes.lower_container}>
      <ul className={toggle ? classes.show : classes.hide}>
        <li onClick={() => setToggle(!toggle)} className={classes.view}>
          <AiOutlineMenu />
          <p>ALL</p>
        </li>
        <li>
          <Link to="https://www.amazon.com/gp/goldbox?ref_=nav_cs_gb">
            Today's Deals 
            <ArrowOutwardIcon className={classes.hide_icon}/>
          </Link>
        </li>
        <li>
          <Link to="https://www.amazon.com/gp/help/customer/display.html?nodeId=508510&ref_=nav_cs_customerservice">
            Customer Service
            <ArrowOutwardIcon className={classes.hide_icon}/>
          </Link>
        </li>
        <li>
          <Link to="https://www.amazon.com/registries?ref_=nav_cs_registry&ref_=nav_cs_registry">
            Registry
            <ArrowOutwardIcon className={classes.hide_icon}/>
          </Link>
        </li>
        <li>
          <Link to="https://www.amazon.com/gift-cards/b/?ie=UTF8&node=2238192011&ref_=nav_cs_gc">
            Gift Card
            <ArrowOutwardIcon className={classes.hide_icon}/>
          </Link>
        </li>
        <li>
          <Link to="https://www.amazon.com/b/?_encoding=UTF8&ld=AZUSSOA-sell&node=12766669011&ref_=nav_cs_sell">
            Sell
            <ArrowOutwardIcon className={classes.hide_icon}/>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default LowerHeader;
