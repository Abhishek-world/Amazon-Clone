import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import {auth} from "./firebase";

function Login() {
    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const signIn = e =>{
        e.preventDefault();
        //Some fancy Firebase code.
        auth.signInWithEmailAndPassword(email,password)
        .then(auth => {
            history.push('/');
        })
        .catch(error=>alert(error.message));
    }
    const register = e =>{
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=> {
            //it successfully created a new user.
            if(auth)
            {
                history.push('./');
                //console.log(auth);

            }
            
        })
        .catch(error => alert(error.message));
        //Some Fancy FireBase Code.
    }

    return (
        <div className="login">
            <Link to="/">
            <img 
            className="login__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon Logo"/>
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e=> setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e=> setPassword(e.target.value)} />

                    <button type='submit' className='login__signInButton' onClick={signIn}>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Developed By Abhishek bajpai Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className='login__registerButton' onClick={register}>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
