import React, { Component } from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import {idUser} from './Connections.js'
import './mywallet.css'
class Home extends Component {
    constructor(props){
        super(props);
        var myWalletList= JSON.parse(localStorage.getItem("MyWalletList"));
        var walletbalance = myWalletList[idUser[0]].balance;
        this.state = {walletamount: walletbalance}
    }
    render() {
        return (
            <div className="app">
                <div className="header">
                    <h1>Watermelon</h1>
                </div>
                
                <p className="title"> Home </p>
                    <button className="button"><Link to="/myAccount" className="link">My Account</Link></button>
                    <button className="button"><Link to="/myCards" className="link">My Cards</Link></button>
                    <button className="button"><Link to="/myWallet" className="link">My Wallet</Link></button>

                    <div className="order">
                <b>My wallet:</b>
                    <b>{this.state.walletamount}</b>
                </div>
                <button className="button2"><Link to="/" className="link">Disconnect</Link></button>
            </div>
        );
    }
}


export default Home;

/*<button><Link to="/payout">Withdraw Money</Link></button>
                <button><Link to="/payin">Add money</Link></button>
                <button><Link to="/transfer">transfer Money</Link></button>
                <button><Link to="/mycard">My card</Link></button>*/