import React, { Component } from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';

class Wallet extends Component{
    render(){
        return(
            <button><Link to="/payin">add money</Link></button>
            <button><Link to="/payout">Withdraw money</Link></button>
            <label><b>my wallet:</b></label>
        );
    }
}