import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment'; 

test('should set default state', ()=> {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]])
});

test('should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };

    const state = expensesReducer(expenses, action);
    expect(state). toEqual(expenses);
});

test('should add a new expensee', () => {
    const createTime = moment(0).valueOf();

    const newExpense = {
        id: 4,
        description: 'Coffee',
        note: '',
        amount: 420,
        createdAt: createTime
    };

    const action = {
        type: 'ADD_EXPENSE',
        expense: newExpense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, newExpense]);
});


test('should edit an expense', () => {
    const updatedExpense = {
        id: 1,
        description: 'Gum',
        note: '',
        amount: 196,
        createdAt: 0
    };

    const action = {
        type: 'EDIT_EXPENSE',
        update: updatedExpense,
        id: expenses[0].id
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([updatedExpense, expenses[1], expenses[2]]);

});


test('should not edit an expense if expense not found', () => {
    const amount = 122000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates : {
            amount
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});


