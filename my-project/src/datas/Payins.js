import React, { Component } from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import {idUser} from './Connections.js'

class Payin extends Component{
    addmoney=(Event)=>{
        Event.preventDefault();
        let payin = {
            id: 'mysql autocrement bigint',
            wallet_id: 'secondary key bigint mysql',
            amount: 'integer !! 15€: amount = 1500',
        }    
        
        var addamount = document.getElementById("add").value;
        payin.amount = addamount;
        payin.wallet_id=idUser[0];

        var mywallet = JSON.parse(localStorage.getItem("MyWalletList"))
        console.log(idUser[0])
        console.log(mywallet[idUser[0]]);
        mywallet[idUser[0]].balance += addamount;
        localStorage.setItem('MyWalletList', JSON.stringify(mywallet))
        alert("Money added ^^")
        document.forms[0].reset();
    }

    render(){
        return(
            <div>
                
                <form>
                <label><b>Add money on your wallet</b></label>
                <input id="add" type="number" placeholder="enter amount" required></input>
                <button onClick={this.addmoney}>Add Money</button>
                </form>
                <button><Link to="/home">return</Link></button>
            </div>
        );
    }
}

export default Payin;