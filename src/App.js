import React, {useEffect} from "react";
import './App.css';
import Header  from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { auth } from "./firebase";
import {useStateValue} from './StateProvider';
function App() {
  const [{},dispatch] = useStateValue();
  useEffect(() => {
    //will only run once when the compoent loads.

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>>>',authUser);
      if(authUser)
      {
        //the user just logged in or the user was logged in
        dispatch({
          type : 'SET_USER',
          user: authUser
        })

      }
      else{
        //the user is logged out.
        dispatch({
          type: 'SET_USER',
          user: null
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
          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>
          {/*Make Sure Default root AT bOTTOM */}
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
