import React, { Component } from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import {WalletList} from './Signins.js'
import {idUser} from './Connections.js'

class Payin extends Component{
    askMoney(){
        let payin = {
            id: 'mysql autocrement bigint',
            wallet_id: 'secondary key bigint mysql',
            amount: 'integer !! 15€: amount = 1500',
        }    
        
        var addamount = document.getElementById("add").value;
        payin.amount = addamount;
        payin.wallet_id=idUser;

        WalletList[idUser].amount+=addamount;
    }

    render(){
        return(
            <div>
                
                <form>
                <label><b>Add money on your wallet</b></label>
                <input id="add" type="integer" placeholder="enter amount" required></input>
                <button onClick={this.addmoney}>Add Money</button>

                </form>
            </div>
        );
    }
}

export default Payin;