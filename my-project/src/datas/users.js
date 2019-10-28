import React, { Component } from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import {UserList} from './Signins.js'
import {idUser} from './Connections.js'


class User extends Component{
    constructor(props){
        super(props);
        var myUserList= JSON.parse(localStorage.getItem("MyUserList"));
        var userpassword = myUserList[idUser[0]].password;
        this.state = {userpass: userpassword}
    }
    ChangePassword = (Event) =>{

        Event.preventDefault();
        let MyUserList = JSON.parse(localStorage.getItem("MyUserList")) 
        var inputnewpassword = document.getElementById("password")
        MyUserList[idUser[0]].password = inputnewpassword;
        localStorage.setItem("MyUserList",JSON.stringify(MyUserList))
    }
    
    render(){
        return(
            <div>
                <form>
                <label><b>New password</b></label>
                <input id="password" type="password" placeholder="enter your new password" required></input>
                <button onClick={this.ChangePassword}>Change password</button>
                <label><b>Your current password:    </b>
                <b>{this.state.userpass}</b></label>

                </form>

            </div>
        );
    }
}

export default User;