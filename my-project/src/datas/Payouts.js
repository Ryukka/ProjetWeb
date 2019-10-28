import React, { Component } from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import {idUser} from './Connections.js'
import './mywallet.css'

class Payout extends Component{
    withdrawMoney=(Event)=>{
        Event.preventDefault();
        let payout = {
            id: 'mysql autocrement bigint',
            wallet_id: 'secondary key bigint mysql',
            amount: 'integer !! 15€: amount = 1500',
        }    
        
        var retrieveamount = document.getElementById("retrieve").value;
        payout.amount = retrieveamount;
        payout.wallet_id=idUser[0];

        var mywallet = JSON.parse(localStorage.getItem("MyWalletList"))
        mywallet[idUser[0]].balance -= Number(retrieveamount);
        localStorage.setItem('MyWalletList', JSON.stringify(mywallet))
        alert("Money retrieved ^^")
        document.forms[0].reset();
    }

    render() {
        return (
            <div className="app">
                <div className="header">
                    <h1>Watermelon</h1>
                </div>

                <form>
                    <p className="title">Withdraw money</p>

                    <div className="order">
                    <label><b>Add money on your wallet</b></label>
                    <input id="retrieve" type="number" placeholder="enter amount" required></input>
                    </div>
                    
                    <button className="button" onClick={this.withdrawMoney}>Add Money</button>
                </form>
                <div>
                <button className="button2"><Link to="/home">return</Link></button>
                </div>
                
            </div>
        );
    }
}

export default Payout;