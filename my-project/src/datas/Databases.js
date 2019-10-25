import React, { Component } from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';


export const wallet = {
    id: 'mysql autocrement bigint',
    balance: 'integer !! if you have 15€, balance = 1500',
    };
export const card = {
    id: 'mysql autocrement bigint',
    last_4: 'string, 4 last card numbers',
    brand: 'string, can be : visa, master_card, american_express, union_pay, jcb',
    expired_at: 'string, date mysql format',
};
export const payin = {
    id: 'mysql autocrement bigint',
    wallet_id: 'secondary key bigint mysql',
    amount: 'integer !! 15€: amount = 1500',
};
export const payout = {
    id: 'mysql autocrement bigint',
    wallet_id: 'secondary key bigint mysql',
    amount: 'integer !! 15e: amount = 1500',
};
export const transfer = {
        id: 'mysql autocrement bigint',
        debited_wallet_id: 'secondary key bigint mysql for debited wallet',
        credited_wallet_id: 'secondary key bigint mysql for credited wallet',
        amount: 'integer !! 15€: amount = 1500',
};
            

