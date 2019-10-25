import React, { Component } from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';

class Card extends Component {
    render(){
        return(
            <div>
                <bouton>add</bouton>
                <bouton>edit</bouton>
                <bouton>delete</bouton>
            </div>
        );
    }
}

export default Card;