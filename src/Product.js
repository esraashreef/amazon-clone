import React from 'react';
import "./Product.css";
import { motion } from "framer-motion"
import { useStateValue } from './Stateprovider';
export default function Product({title,image, price,rating , id}) {
      const[{basket}, dispatch]= useStateValue();
      const addtobasket =  ()=>{
          dispatch({
              type:'add-to-basket',
              item:{
                  id:id,
                  title:title,
                  image :image,
                  price:price,
                  rating:rating,

              },
          });
      } ;
    
    return (
        
        <motion.div  whileHover={{ scale: 1.05 }} className="product">
         
            <div className="product-info">
                <p>{title}</p>
                <p className="product-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
          
                <div className="product-rating">
                   {Array(rating)
                   .fill( )
                   .map(( i)=>(
                       <p>⭐</p>
                   ))}


                    
                   

                </div>
                
            </div>
            <img src={image} alt=""/>
            <button onClick={addtobasket}>add to Basket</button>
            
        
        </motion.div>
    )
}
