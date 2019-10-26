import React, { Component } from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import {WalletList} from './Signins.js'
import {idUser} from './Connections.js'

class Payout extends Component{
    askMoney(){
        let payout = {
            id: 'mysql autocrement bigint',
            wallet_id: 'secondary key bigint mysql',
            amount: 'integer !! 15e: amount = 1500',
        };
        
        var addamount = document.getElementById("withdraw").value;
        payout.amount = addamount;
        payout.wallet_id=idUser;

        WalletList[idUser].amount-=addamount;
    }

    render(){
        return(
            <div>
                
                <form>
                <label><b>Withdraw money on your wallet</b></label>
                <input id="withdraw" type="integer" placeholder="enter amount" required></input>
                <button onClick={this.addmoney}>Add Money</button>

                </form>
            </div>
        );
    }
}

export default Payout;