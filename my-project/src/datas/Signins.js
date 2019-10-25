import React, { Component } from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';

class Signin extends Component{
    render(){
        return(
            <div>
                <form>
                    <label><b>Mail adress</b></label>
                        <input type="email" placeholder="enter email" required></input>
                    <label><b>Password</b></label>
                        <input type="password" placeholder="enter password" required></input>
                    <label><b>Confirm Password</b></label>
                        <input type="password" placeholder="Confirm password" required></input>
                </form>

                <button><Link to="/">Return</Link></button>
                
                <button><Link to="/">Register</Link></button>
            </div>    
        );
    }
}

export default Signin;
