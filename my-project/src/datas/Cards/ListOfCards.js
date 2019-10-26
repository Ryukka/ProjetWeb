import React, { Component } from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import User from './users.js';
import CreditCardForm from './CreditCardForm.js'
import CreditCard from './CreditCard.js'

class ListOfCards extends Component {


render(props) {
    return(
        <ul>
        {this.props.User.map((CreditCard)=>{
            return <CreditCard  key={User.id}/>
        })}
    </ul>
    )
}

}

export default ListOfCards;
