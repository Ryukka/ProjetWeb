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
                <bouton className="button"><Link to="/addCard">Add a new credit card</Link></bouton>
                <bouton className="button"><Link to="/cards">Modify a credit card</Link></bouton>
                <bouton className="button"><Link to="/cards">Delete a credit card</Link></bouton>
                <button className="button2"><Link to="/">Back</Link></button>
            </div>
        );
    }
}

export default Card;
