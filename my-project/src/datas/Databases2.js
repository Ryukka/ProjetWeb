import { BrowserRouter, Route} from 'react-router-dom';
import Contact from './Databases.js';
import {UserList} from './Databases.js';
import React, { Component } from 'react';

class ContactsList extends Component {
    render(){
        return(
            <ul>
                {this.props.User.map((contact)=>{
                    return <Contact contact={contact} key={contact.id}/>
                })}
            </ul>
        )
    }
}

export default ContactsList;