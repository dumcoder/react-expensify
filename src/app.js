import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { setTimeout } from 'timers';



const store = configureStore();

const expenseOne = store.dispatch(addExpense({description: 'Water Bill', amount: 500, createdAt:-21000}));
const expenseTwo = store.dispatch(addExpense({description: 'Gas bill', amount: 300, createdAt:-1000}));
const expenseThree = store.dispatch(addExpense({description: 'Rent Bill', amount: 500, createdAt:1000}));
//store.dispatch(setTextFilter('water'));


const state = store.getState();
//console.log(state);
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)

//console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
