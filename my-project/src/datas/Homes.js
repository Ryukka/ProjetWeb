import React, { Component } from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';

class Home extends Component{
    render(){
        return(
            <div>
                <button><Link to="/payout">Pay</Link></button>
                <button><Link to="/payin">Ask</Link></button>
                <button><Link to="/mycard">My card</Link></button>
                <button><Link to="/myaccount">My Account</Link></button>
            </div>
        );
    }
}


export default Home;