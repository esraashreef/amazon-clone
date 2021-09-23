
import React , {useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router ,Switch , Route} from 'react-router-dom' ;
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './Stateprovider';
import Payment from './Payment ';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './Orders';

 const promise= loadStripe("pk_test_51JPnsQJoUzv1x0Fr8tMHuXqY4iejWBwlpdUMAT4Z3R26VBKhMUDJuredN76AvNBnE0dCBvkDGb8roE0IgyitRT2S00GNpQ7uL6");
function App() {
         const [{}, dispatch]= useStateValue();
  useEffect(() => {
     auth.onAuthStateChanged( authUser =>{
      console.log('the user is  ' , authUser)
      if(authUser){
        dispatch({
          type : 'SET-USER',
          user : authUser
        })
      } else{
        dispatch({
          type : 'SET-USER',
          user : null
      })
     }

     })

     
    
  }, [])
  return (

    <Router>
      <div className="app">

      
      <Switch>
      <Route path="/login">
            
            <Login/>
            
        </Route>
     <Route path="/orders">
           <Header/>
            <Orders/>
            
        </Route>




      <Route path="/payment">
            <Header/>
            <Elements stripe={promise}>
                 <Payment/>
            </Elements>     
            
        </Route>

         <Route path="/checkout">
            <Header/>
            <Checkout/>
         </Route>

         <Route path="/">
           <Header/>
            <Home/>
         </Route>

       </Switch>
      </div>
    </Router>
  );
}

export default App;
