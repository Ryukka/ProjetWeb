import React, { Component } from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';

class Card extends Component {
    render(){
        return(
            <div>
                <bouton className="button"><Link to="/addCard">Add a new credit card</Link></bouton>
                <bouton className="button"><Link to="/cards">Modify a credit card</Link></bouton>
                <bouton className="button"><Link to="/cards">Delete a credit card</Link></bouton>
                <button className="button2"><Link to="/">Back</Link></button>
            </div>
        );
    }
}

export default Card;