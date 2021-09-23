import React from 'react'
import './Checkoutproduct.css'
import FlipMove from 'react-flip-move';
import { useStateValue } from './Stateprovider';
export default function Checkoutproduct({id,image,title,price,rating, hideButton}) {

    const[{basket}, dispatch]= useStateValue();
    const removefrombasket=()=>{
       dispatch({
           type: 'remove-from-basket',
           
            id: id
        })
    }
       
    
    
    return (
        
        <div  class="Checkoutproduct">
           <img className="checkoutproduct-image" src={image}/>
           <div className="checkoutproduct-info">
              <p className="checkoutproduct-t">{title}</p>
                <p className="checkoutproduct-p">
                   <small>$</small>
                   <strong>{price}</strong>
                  </p>
                   <div className="product-rating">
                   {Array(rating)
                   .fill( )
                   .map(()=>(
                       <p>⭐</p>
                   ))}


                    
                   

                </div>
                 {!hideButton &&(
                    <button onClick={removefrombasket}>remove from basket</button>
                 )}
                


           </div>
        
        </div>  
    )
}
