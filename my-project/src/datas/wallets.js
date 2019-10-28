import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './design_global.css'
class Wallet extends Component {
    render() {
        return (
            <div className="app">
                <div className="header">
                    <h1>Watermelon</h1>
                </div>
                <p className="title">My Wallet</p>
                <button><Link to="/payin">Make a deposit</Link></button>
                <button><Link to="/payout">Withdraw money</Link></button>
                <button><Link to="/transfer">Transfer money</Link></button>
                <label>
                    <b>My Wallet:</b>
                    <button onClick={this.mywallet}></button></label>
            </div>

        )
    }
}

export default Wallet;