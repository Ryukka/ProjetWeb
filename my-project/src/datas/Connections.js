import React, { Component } from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import {UserList} from './Databases.js'

class Connection extends Component{   

    CheckRegistered = () => {
        if()
    }
    
    render () {
        return(
        <div className="App">
        <h1>Hello</h1>
        <form>
            <label><b>Mail adress</b></label>
            <input type="email" placeholder="enter email" required></input>
            <label><b>Password</b></label>
            <input type="password" placeholder="enter password" required></input>
        </form>
        <button onClick><Link to="/signin">Sign in</Link></button>
        <button><Link to="/home">Log in</Link></button>
        </div>
        );
    }
}

export default Connection;