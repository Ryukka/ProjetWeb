import React from 'react';
import logo from './logo.svg';
import './App.css';
import Connection from './datas/Connections.js';
import Root from './datas/Roots.js';
import { BrowserRouter, Route} from 'react-router-dom';
import './datas/Databases.js';
import { UserList } from './datas/Databases.js';
import ContactList from './datas/Databases.js';

function App() {
    return (
      <BrowserRouter>
      <div>
      <Root/>
      </div>
     </BrowserRouter>
      
    );
}


export default App;