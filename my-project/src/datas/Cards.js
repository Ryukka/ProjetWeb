import React, { Component } from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';

class Card extends Component {
    render(){
        return(
            <div>
                <bouton><Link to="/addCard">Add a new credit card</Link></bouton>
                <bouton><Link to="/cards">Modify a credit card</Link></bouton>
                <bouton><Link to="/cards">Delete a credit card</Link></bouton>
            </div>
        );
    }
}

export default Card;