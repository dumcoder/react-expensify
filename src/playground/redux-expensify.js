import { createStore, combineReducers} from "redux";
import uuid from 'uuid';

// Add action generators to dispatch changes to state

// ADD_EXPENSE
const addExpense = (
  {
    description = '',
    note='',
    amount = 0,
    createdAt = 0 
  } = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});


// REMOVE_EXPENSE
const removeExpense = ({id} = {}) => (
    {
        type: 'REMOVE_EXPENSE',
        id: id
    }
);

// EDIT_EXPENSE
const editExpense = (expense = {}) => (
    {
        type: 'EDIT_EXPENSE',
        update: expense
    }
);

// SET_TEXT_FILTER
const setTextFilter = (text = '') => (
    {
        type: 'SET_TEXT_FILTER',
        textToFilter: text
    }
);

// SORT_BY_DATE
const sortByDate = () => (
    {
        type:'SORT_BY_DATE'
    }
);


// SORT_BY_AMOUNT
const sortByAmount = () => (
    {
        type:'SORT_BY_AMOUNT'
    }   
);


// SET_START_DATE
const setStartDate = (startDate = '') => (
    {
        type: 'SET_START_DATE',
        startDate: startDate
    }
);

// SET_END_DATE
const setEndDate = (endDate = '') => (
    {
        type: 'SET_END_DATE',
        endDate: endDate
    }
);

//Expenses Reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(expense => expense.id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map(expense => {
                if (expense.id === action.update.id) {
                    return {
                        ...expense,
                        ...action.update
                    }
                } else {
                    return expense;
                }
            });
        default:
            return state;
    }
};

// Filter Reducer
const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};
const filterReducer = (state = filterReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.textToFilter
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
            case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
            case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
            
        default:
            return state;
    }
};




// Get visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}= {}) => {
    return expenses.filter(expense => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch
    }).sort((a,b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
}

// Store creation
const store = createStore(
    combineReducers( {
        expenses: expensesReducer,
        filters: filterReducer
    } )
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 500, createdAt:-21000}));
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 300, createdAt:-1000}));


//const removeOne = store.dispatch(removeExpense({id: expenseOne.expense.id}));

// const editExpenseReturn = store.dispatch(editExpense(
//     {
//      id: expenseTwo.expense.id,
//      description:'Caffe a lat',
//      amount:400,
//      note:'great coffee'
//     }));

    //const textFilterReturn = store.dispatch(setTextFilter('Coffee'));
    //const textFilterReturn1 = store.dispatch(setTextFilter());


    //store.dispatch(sortByDate());
    store.dispatch(sortByAmount());

 //store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));

    // const demoState = {
//     expenses:[{
//         id: 'jkdsjk',
//         description: 'January rent',
//         note: 'Final payment for the address',
//         amount: 54500,
//         createdAt: 0
//     }],
//     filters: {
//         text: 'rent',
//         sortBy: 'amoint', // date or amount
//         startDate: undefined,
//         endDate: undefined
//     }
// };

// const user = {
//     name: 'Jen',
//     age: 24
// };
// console.log({
//     age:77,
//     ...user,
//     location: {city: 'Los Angeles', zip: 94502}
// });