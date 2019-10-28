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
                <button className="button" ><Link to="/payin" className="link">Make a deposit</Link></button>
                <button className="button"><Link to="/payout" className="link">Withdraw money</Link></button>
                <button className="button"><Link to="/transfer" className="link">Transfer money</Link></button>
                <label>
                    <b>My Wallet:</b>
                    <button onClick={this.mywallet}></button>
                </label>
                <button className="button2"><Link to="/home" className="link">Back</Link></button>
            </div>

        )
    }
}

export default Wallet;