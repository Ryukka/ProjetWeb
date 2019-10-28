import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { idUser } from './Connections.js'
import './mywallet.css'

class Payin extends Component {
    addmoney = (Event) => {
        Event.preventDefault();
        let payin = {
            id: 'mysql autocrement bigint',
            wallet_id: 'secondary key bigint mysql',
            amount: 'integer !! 15€: amount = 1500',
        }

        var addamount = document.getElementById("add").value;
        payin.amount = addamount;
        payin.wallet_id = idUser[0];

        var mywallet = JSON.parse(localStorage.getItem("MyWalletList"))
        mywallet[idUser[0]].balance += Number(addamount);
        localStorage.setItem('MyWalletList', JSON.stringify(mywallet))
        alert("Money added ^^")
        document.forms[0].reset();
    }

    render() {
        return (
            <div className="app">
                <div className="header">
                    <h1>Watermelon</h1>
                </div>

                <form >
                    <p className="title">Make a deposit</p>
                    <div className="order">
                        <label><b>Add money on your wallet</b></label>
                        <input type="number" placeholder="enter amount" required></input>
                        
                    </div>
                    <button className="button" onClick={this.addmoney}>Add Money</button>
                </form>

                <div>
                    <button className="button2"><Link to="/home">return</Link></button>
                </div>
            </div>
        );
    }
}

export default Payin;