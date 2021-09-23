import React from 'react'
import './Header.css'

import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import{ Link } from "react-router-dom";
import { useStateValue } from './Stateprovider';
import { auth } from './firebase';

export default function Header() {

     const[{basket , user}, dispatch]= useStateValue();

     const handleauth=() =>{
       if (user) {
         auth.signOut();
       }
     }
    
    return (
        <div className="header">

            <Link to="/">
           <img className="header-logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""></img>
           

           </Link>
            
          <div className="header-search">
            <input type="text" className="header-searchinput"></input>
            <SearchIcon className="header-searchicon"/>
            
          </div>
          
          <div className="header-nav">
               <Link to={!user && '/login'}>
               <div onClick={handleauth} className="header-option">
                <span className="header-optionlineone">Hello {!user ? 'Guest' : user.email.slice(0, user.email.indexOf('@'))}</span>
                <span  className="header-optionlinetwo">{ user?'Sign out':'Sign in'} </span>
              </div>
              </Link>

              <Link  to="/orders">
               <div   className="header-option">
                  <span className="header-optionlineone">Returns</span>
                  <span className="header-optionlinetwo">Orders</span>

               </div>
               </Link>
               <div className="header-option">
                   <span className="header-optionlineone"> Your</span>
                   <span className="header-optionlinetwo">Prime</span>
               </div>


               <Link to="/checkout">
               <div className="header-optionbasket">
                  <ShoppingBasketIcon />

                  <span className=" header-optionlinetwo header-basketcount "> {basket?.length}</span>

               </div>
               </Link>

          </div>
          

        </div>
    );
}
