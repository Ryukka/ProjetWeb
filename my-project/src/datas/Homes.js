import React, { Component } from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import {idUser} from './Connections.js'

class Home extends Component{
    constructor(props){
        super(props);
        var myWalletList= JSON.parse(localStorage.getItem("MyWalletList"));
        var walletbalance = myWalletList[idUser[0]].balance;
        this.state = {walletamount: walletbalance}
    }

    render(){
        return(
            <div>
                <button><Link to="/payout">Withdraw Money</Link></button>
                <button><Link to="/payin">Add money</Link></button>
                <button><Link to="/transfer">transfer Money</Link></button>
                <button><Link to="/mycard">My card</Link></button>
                <button><Link to="/mywallet">My card</Link></button>
                <button><Link to="/myaccount">My Account</Link></button>
                <button><Link to="/cards">Cards</Link></button>
                <button><Link to="/">Disconnect</Link></button>
                <div>
                    <b>my wallet:</b>
                    <b>{this.state.walletamount}</b>
                </div>
            </div>
        );
    }
}


export default Home;