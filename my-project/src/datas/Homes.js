import React, { Component } from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import {idUser} from './Connections.js'
import {WalletList} from './Signins.js'

class Home extends Component{
    mywallet=()=>{
        let MyWalletList = JSON.parse(localStorage.getItem("MyWalletList"))
        console.log(MyWalletList[idUser].balance)
    }
    render(){
        return(
            <div className="app">
                <button><Link to="/payout">Withdraw Money</Link></button>
                <button><Link to="/payin">Add money</Link></button>
                <button><Link to="/transfer">transfer Money</Link></button>
                <button><Link to="/mycard">My card</Link></button>
                <button><Link to="/myaccount">My Account</Link></button>
                <button><Link to="/">Disconnect</Link></button>
                <div>
                    <b>my wallet:</b>
                    <button onClick={this. mywallet}></button>
                </div>
            </div>
        );
    }
}


export default Home;