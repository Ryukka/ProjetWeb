import React, {Component} from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import CreditCard from './CreditCard.js';

class CreditCardForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: '',
            name:'',
            rib: '',
            expiryDate: '',
            cvc: ''
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBrand = this.handleBrand.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleRib = this.handleRib.bind(this);
        this.handleExpiryDate = this.handleExpiryDate.bind(this);
        this.handleCVC = this.handleCVC.bind(this);
    }

    handleBrand = event => {
        this.setState({brand: event.target.value});
    }
    handleName = event => {
        this.setState({name: event.target.value });
    }

    handleRib = event => {        
        this.setState({rib: event.target.value});
    }

    handleExpiryDate = event => {
        this.setState({expiryDate: event.target.value});
    }

    handleCVC = event => {
        this.setState({cvc: event.target.value});
    }

    handleSubmit = event => {
        alert('Your card has been succesfully added! \nBrand: ' + this.state.brand+'\nName: ' + this.state.name + '\nRIB: ' + this.state.rib + '\nExpiryDate: ' + this.state.expiryDate + '\nCVC: ' + this.state.cvc);
        event.preventDefault();
    }

    render(props) {
        const { brand, name, rib, expiryDate, cvc} = this.state

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
                        Name:
                        <input
                            onChange={this.handleName}
                            type="text"
                            value={this.state.name}
                            placeholder="John Doe"
                            required
                        />
                    </label>

                    <label>
                        RIB
                        <input 
                            type="number" 
                            value={this.state.rib} 
                            onChange={this.handleRib} 
                            placeholder="xxxx xxxx xxxx xxxx" 
                            required>
                        </input>
                    </label>

                    <label>
                        Expiry Date
                        <input 
                            type="text" 
                            value={this.state.expiryDate} 
                            onChange={this.handleExpiryDate} 
                            placeholder="mm/yyyy" 
                            required>
                        </input>
                    </label>

                    <label>
                        CVC
                        <input 
                            type="number" 
                            value={this.state.cvc} 
                            onChange={this.handleCVC} 
                            placeholder="xxx" 
                            required>
                        </input>
                    </label>
                    
                    <label>
                        <input 
                            type="submit" 
                            value="Envoyer"
                            onChange={this.handleSubmit}/>
                    </label>
                    
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