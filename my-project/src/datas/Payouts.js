import React, { Component } from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import {idUser} from './Connections.js'

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
        mywallet[idUser[0]].balance -= retrieveamount;
        localStorage.setItem('MyWalletList', JSON.stringify(mywallet))
        alert("Money retrieved ^^")
        document.forms[0].reset();
    }

    render(){
        return(
            <div>
                
                <form>
                <label><b>Add money on your wallet</b></label>
                <input id="retrieve" type="number" placeholder="enter amount" required></input>
                <button onClick={this.withdrawMoney}>Add Money</button>
                </form>
                <button><Link to="/home">return</Link></button>
            </div>
        );
    }
}

export default Payout;