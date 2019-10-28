import React, { Component } from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';

class Card extends Component {
    render(){
        return(
            <div className="app">
                <div className="header">
                    <h1>Watermelon</h1>
                </div>
                <p className="title">My Cards</p>
                <bouton className="button"><Link to="/addCard" className="link">Add a new credit card</Link></bouton>
                <bouton className="button"><Link to="/cards" className="link">Modify a credit card</Link></bouton>
                <bouton className="button"><Link to="/cards" className="link">Delete a credit card</Link></bouton>
                <button className="button2"><Link to="/home"className="link" >Back</Link></button>
            </div>
        );
    }
}

export default Card;
