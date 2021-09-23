import React from 'react'
import './Checkout.css'
import Checkoutproduct from './Checkoutproduct'
import Subtotal from './Subtotal'
import { useStateValue } from './Stateprovider';
import FlipMove from 'react-flip-move';

export default function Checkout() {
    
    const[{basket ,user}, dispatch]= useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">

             <img className="checkout-ad" src="https://disruptiveadvertising.com/static/c653234a6e43c8c1c2c33cb2ac5e4477/7f757/Screen-Shot-2018-10-29-at-11.50.03-AM.png" alt=""/>
             <div>
                <h3>hello {user?.email.slice(0, user.email.indexOf('@'))}</h3>
                 <h2 className="checkout-title">
                     your shopping basket
                 </h2>
                 <FlipMove>
               {basket.map(item=>
                 
                 <Checkoutproduct
                     id={item.id}
                     image={item .image}
                     title={item.title}
                     price={item.price}
                     rating={item.rating}
                 />
                
               )}
               </FlipMove>



             </div>
               
            </div>
            <div className="checkout__right">
                <Subtotal/>
            </div>


        </div>
    )
}
