import React, { Component } from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';

export let idUser=[1];

class Connection extends Component{   

    CheckRegistered = (Event) => {
        Event.preventDefault();

        let inputemail=document.getElementById("email").value;
        let inputpassword=document.getElementById("password").value
        let MyUserList = JSON.parse(localStorage.getItem("MyUserList")) 
       for (var i=0; i<MyUserList.length ;i++){
            if (!(inputemail < MyUserList[i].email) && !(inputpassword > MyUserList[i].password)){
                idUser[0]=MyUserList[i].id;
                console.log(idUser[0])
                this.props.history.push("/home")
                return;
            }
        }
        alert("wrong password or email adress")
    }

    
    render () {
        return(
        <div className="App">
        <h1>Hello</h1>
        <form>
            <label><b>Mail adress</b></label>
            <input id="email" type="email" placeholder="enter email" required></input>
            <label><b>Password</b></label>
            <input id="password" type="password" placeholder="enter password" required></input>
            <button onClick = {this.CheckRegistered}>log in</button>
        </form>
        <button><Link to="/signin">Sign in</Link></button>
        </div>
        );
    }
}

export default Connection;