import React, {Component} from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';

class Cards extends Component {
    constructor(props) {
        super(props);
        /*this.state = {
            
        }*/
    }
      render(props) {
          return(
            <div>
                <button><Link to="/addcard">Add card</Link></button>
                <button>Delete card</button>
                <button><Link to="/home">Back</Link></button>
            </div>
          )
      }
}

export default Cards;
