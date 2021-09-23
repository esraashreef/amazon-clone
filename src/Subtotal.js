import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './Stateprovider';

import { getbaskettotal } from './reducer';
import { useHistory } from 'react-router-dom';

export default function Subtotal() {
    const history = useHistory();
    
    const[{basket}, dispatch]= useStateValue();
    
    return (
        <div className="subtotal">




          <CurrencyFormat
           renderText={(value)=>(
            
               <>
               <p>
               Subtotal({basket.length} items) :
               <strong>{`${value}`}</strong>


               </p>
               <small className="subtotal-gift">
               <input type="checkbox"/>
                this order contains a gift
               </small>
              </>


           )}
           decimalScale={2}
           value={getbaskettotal(basket)}
           displayType={"text"}
           thousandSeparator={true}
           prefix={"$"}





           




          />   

          <button onClick={e=> history.push('/payment')}>Proceed to checkout</button>

        </div>
    )
}
