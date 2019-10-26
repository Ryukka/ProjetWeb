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
maketransfer=()=>{
    transfer.debited_wallet_id=idUser;
    transfer.amount = document.getElementById("howmuch").value;
    let forwho =document.getElementById("forwho").value
    var idforwho=-1;
    while  (idforwho==-1){
        for (var i=1; i<UserList.length;i++){
            if (forwho== UserList[i].email){
                idforwho=UserList[i].id;
            }
        }
        break;
    }
    transfer.credited_wallet_id=idforwho;

    //looking for the debited wallet
    WalletList[idUser].balance-=transfer.amount
    WalletList[idforwho].balance+=transfer.amount
}

    render(){
        return(
            <form>
                <label><b>for who?</b></label>
                <input id="forwho" type="text" placeholder="enter recipient mail" required></input>
                <input id="howmuch" type="integer" placeholder="How much?" required></input>
                <button onClick={this.maketransfer}>Transfer the moneyyyyyy</button>
            </form>
        )
    }
}

export default Transfer;