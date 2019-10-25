import React, { Component } from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import Signin from './Signins.js';
import Connection from './Connections.js';
import Payin from './Payins.js';
import Card from './Cards.js';
import Payout from './Payouts.js';
import Home from './Homes.js';
import User from './Users.js';



class Root extends Component {
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Connection}/>
                    <Route path="/signin" component={Signin}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/payin" component={Payin}/>
                    <Route path="/payout" component={Payout}/>
                    <Route path="/mycard" component={Card}/>
                    <Route path="/myaccount" component={User}/>
                </div>
            </BrowserRouter>            
        );
    }
}

export default Root;