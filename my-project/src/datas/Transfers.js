import React, { Component } from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import {UserList} from './Signins.js'
import {idUser} from './Connections.js'


class User extends Component{
    
    ChangePassword = (idUser,Event) =>{

        Event.preventDefault();
        let MyUserList = JSON.parse(localStorage.getItem("MyUserList")) 
        var inputnewpassword = document.getElementById("password")
        console.log(MyUserList[idUser])
        MyUserList[idUser].password = inputnewpassword;
    }
    
    render(){
        return(
            <div>
                <form>
                <label><b>New password</b></label>
                <input id="password" type="password" placeholder="enter your new password" required></input>
                <button onClick={this.ChangePassword}>Change password</button>
                <label><b>Your current password</b>
                        <b>{UserList[idUser].password}</b></label>

                </form>

            </div>
        );
    }
}

export default User;