import React, { Component } from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';

export var idUser =0;

class Connection extends Component{   
    constructor(props){
        super(props);
        this.state = {allow: false}
        this.CheckRegistered = this.CheckRegistered.bind(this);

    }

    CheckRegistered = (Event) => {
        Event.preventDefault();

        let inputemail=document.getElementById("email").value;
        let inputpassword=document.getElementById("password").value
        let MyUserList = JSON.parse(localStorage.getItem("MyUserList")) 

        for (var i=0; MyUserList.length ;i++){
            
            console.log(MyUserList[i])
            console.log(MyUserList.email)
            if (!(inputemail < MyUserList[i].email) && !(inputpassword > MyUserList[i].password)){
                this.setState({allow: true});
                idUser=MyUserList[i].id;
                console.log(idUser)
            }
        }
        console.log(this.state)
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