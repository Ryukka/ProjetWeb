import React, { Component } from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import './Databases.js';
import User from './Users.js';

export let UserList = [];
export let WalletList =[];

class Signin extends Component{

    AffectUser = (Event) =>{
        Event.preventDefault();
        let User = {
            id: 'mysql autocrement bigint',
            first_name: 'string',
            last_name: 'string',
            email: 'email, string unique',
            password: 'string',
            is_admin: 'boolean'
        }
        let wallet = {
            id: 'mysql autocrement bigint',
            balance: 'integer',
        } 
            
        var inputemail=document.getElementById("email").value;
        var inputfirstname =document.getElementById("firstname").value;
        var inputlastname=document.getElementById("lastname").value;
        var inputpassword=document.getElementById("password").value;

        User.email=inputemail;
        User.first_name=inputfirstname;
        User.last_name=inputlastname;
        User.password=inputpassword;

        wallet.balance=Number('0');

        UserList.push(User) // add the User on the UserList
        
        WalletList.push(wallet)

        for (var i=0; i<UserList.length;i++){
            UserList[i].id=i;
            UserList[i].is_admin=false;
            WalletList[i].id=i;
        }
        alert("Account created")
        localStorage.setItem('MyUserList',JSON.stringify(UserList));
        localStorage.setItem('MyWalletList', JSON.stringify(WalletList));

        document.forms[0].reset(); // reset the form for next entries  
             
    }

    render() {
        return (
            <div className="app">
                <div className="header">
                    <h1>Watermelon</h1>
                </div>
                <div className="form">
                    <form>
                        <p className="title">Sign In</p>
                        <div className="form_item">
                            <label></label>
                            <input id="firstname" type="text" placeholder="enter your first name" required></input>
                        </div>

                        <div className="form_item">
                            <label></label>
                            <input id="lastname" type="text" placeholder="enter your last name" required></input>
                        </div>

                        <div className="form_item">
                            <label></label>
                            <input id="email" type="email" placeholder="enter email" required></input>
                        </div>

                        <div className="form_item">
                            <label></label>
                            <input id="password" type="password" placeholder="enter password" required></input>
                        </div>

                        <p>
                            <button onClick={this.AffectUser}>Validate</button>
                        </p>

                    </form>
                </div>

                <button className="button2"><Link to="/">Return</Link></button>
            </div>
        );
    }
}

export default Signin;
