import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from 'react-dom';
import CreditCard from '/home/marphi/PW/ProjetWeb/my-project/src/datas/CreditCard.js';

const mountNode = document.getElementById("app");

/*render(
    <div className='demo-container'>
        <CreditCard
            name="NEIL GAIMAN"
            number="5241 1734 7629 0435"
            expiry="04/2028"
        />
    </div>,
    mountNode
);*/




ReactDOM.render(
    <App />, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
