import React, { Component } from 'react';

export class Connection extends Component{
    render () {
        return(
        <div className="App">
        <h1>Hello </h1>
        <form>
            <label><b>Mail adress</b></label>
            <input type="email" placeholder="enter email" required></input>
            <label><b>Password</b></label>
            <input type="password" placeholder="enter password" required></input>
        </form>
        <button>sign in</button>
        <button>Log in</button>
        </div>
            //if statement
            //log in
        )
    }
}

export default Connection;