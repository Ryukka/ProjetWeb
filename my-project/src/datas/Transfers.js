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

    let forwho =document.getElementById("forwho").value
    var mywallet = JSON.parse(localStorage.getItem("MyWalletList")) 
    var idforwho;

    for (var i=0; i<mywallet.length;i++){
        if (!(forwho < mywallet[i].email) && !(forwho > mywallet[i].email)){
            idforwho=mywallet[i].id;
            console.log(idforwho)
            transfer.credited_wallet_id=idforwho;
            mywallet[idUser[0]].balance-=transfer.amount
            mywallet[idforwho].balance+=transfer.amount
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
            <div>
            <form>
                <label><b>for who?</b></label>
                <input id="forwho" type="email" placeholder="enter recipient mail" required></input>
                <label><b>how much?</b></label>
                <input id="howmuch" type="number" placeholder="How much?" required></input>
                <button onClick={this.maketransfer}>Transfer the moneyyyyyy</button>
            </form>
            <button><Link to="/home">Return</Link></button>
            </div>
        )
    }
}

export default Transfer;