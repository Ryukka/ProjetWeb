import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './Connection.css'
import './design_global.css'

export let idUser = [1];

class Connection extends Component {

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


    render() {
        return (
            <div className="app">
                <div className="header">
                    <h1>Watermelon</h1>
                </div>
                <div className="form">
                    <form>
                        <p className="title">Log In</p>
                        <div className="mail">
                            <label ><b></b></label>
                            <input id="email" type="email" placeholder="enter email" required></input>
                        </div>

                        <div className="pwd">
                            <label ><b></b></label>
                            <input id="password" type="password" placeholder="enter password" required></input>
                        </div>

                        <div className="log_in" >
                            <button onClick={this.CheckRegistered}>log in</button>
                        </div>
                    </form>
                </div>

                <div className="sign_in">
                    <button ><Link to="/signin">Sign in</Link></button>
                </div>
            </div>


        );
    }
}

export default Connection;