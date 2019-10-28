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
        if (MyUserList == null){
            alert("No inscriptions yet. Create an account to log in")
            return;
        }
      
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
                        <div className="item">
                            <label ><b></b></label>
                            <input  type="email" placeholder="enter email" required></input>
                        </div>

                        <div className="item">
                            <label ><b></b></label>
                            <input type="password" placeholder="enter password" required></input>
                        </div>

                        <div className="item" >
                            <button className="button" onClick={this.CheckRegistered}>log in</button>
                        </div>
                    </form>
                </div>

                <div className="sign_in">
                    <button className="button2" ><Link to="/signin" className="link">Sign in</Link></button>
                </div>
            </div>


        );
    }
}

export default Connection;