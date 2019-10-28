import React, { Component } from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import {UserList,WalletList} from './Signins.js'
import {idUser} from './Connections.js'


export const transfer = {
    id: 'mysql autocrement bigint',
    debited_wallet_id: 'secondary key bigint mysql for debited wallet',
    credited_wallet_id: 'secondary key bigint mysql for credited wallet',
    amount: 'integer !! 15€: amount = 1500',
};



class Transfer extends Component{
maketransfer=(Event)=>{

    Event.preventDefault();

    transfer.debited_wallet_id=idUser[0];
    transfer.amount = document.getElementById("howmuch").value;

    let forwho =document.getElementById("forwho").value;
    var mywallet = JSON.parse(localStorage.getItem("MyWalletList")) 
    let myUserList = JSON.parse(localStorage.getItem("MyUserList"))

    for (var i=0; i<mywallet.length;i++){
        if (!(forwho < myUserList[i].email) && !(forwho > myUserList[i].email)){
            if(mywallet[idUser[0]].balance < Number(transfer.amount)){
                alert("Not enough fund for transfer")
                return;
            }
            transfer.credited_wallet_id=i;
            mywallet[idUser[0]].balance -= Number(transfer.amount)
            mywallet[i].balance += Number(transfer.amount)
            localStorage.setItem("MyWalletList", JSON.stringify(mywallet))
            alert("Money transfered")
            document.forms[0].reset();
            return
        }
    }
    alert("User not found")  
}

    render(){
        return(
            
            <div className="app">
                <div className="header">
                    <h1>Watermelon</h1>
                </div>
            <form className="form">
                <label className="form_item" ><b>for who?</b></label>
                <input id="forwho" type="email" placeholder="enter recipient mail" required></input>
                <label><b>how much?</b></label>
                <input  id="howmuch" type="number" placeholder="How much?" required></input>
                <button onClick={this.maketransfer}>Transfer the moneyyyyyy</button>
            </form>
            <button><Link to="/home">Return</Link></button>
            </div>
        
        )
    }
}

export default Transfer;