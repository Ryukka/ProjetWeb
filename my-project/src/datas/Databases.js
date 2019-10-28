import React, { Component } from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';

export const card = {
    idUser: 'integer',
    id: 'mysql autocrement bigint',
    last_4: 'string, 4 last card numbers',
    brand: 'string, can be : visa, master_card, american_express, union_pay, jcb',
    expired_at: 'string, date mysql format',
};
            

