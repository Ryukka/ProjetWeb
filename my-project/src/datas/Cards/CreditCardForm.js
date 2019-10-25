import React, {Component} from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import CreditCard from './CreditCard.js';

class CreditCardForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            value2:''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Your card has been succesfully added: ' + this.state.value);                       
        event.preventDefault();
    }

    render(props) {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Brand:
                        <select>
                            <option value="VISA">VISA</option>
                            <option value="MasterCard">MasterCard</option>
                            <option value="Electron">Electron</option>
                        </select>
                    </label>
                    
                    <label>
                        RIB
                    </label>
                    <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="RIB" required></input>
                    
                    <input type="submit" value="Envoyer"/>
                </form>


            </div>
            
        )
    }
}

export default CreditCardForm;

/*
 <div className='demo-container'>
                                    <CreditCard
                                        logo="VISA"
                                        name="NEIL GAIMAN"
                                        number="5241 1734 7629 0435"
                                        expiry="04/2028"
                                    />
                                </div>



*/