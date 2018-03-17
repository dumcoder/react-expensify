import {createStore} from 'redux';
import { type } from 'os';

//Action Generator
const incrementCount = ({incrementBy = 1} = {}) => (
     {
        type: 'INCREMENT',
        incrementBy: incrementBy
    }
);


const decrementCount = ({decrementBy = 1} = {}) => (
    {
        type : 'DECREMENT',
        decrementBy: decrementBy
    }
);

const reset = () => (
    {
        type: 'RESET'
    }
);

const set = ({count = 1} = {}) => (
    {
        type: 'SET',
        count: count
    }
);

const store = createStore((state = {count: 0}, action) => {

    switch (action.type) {
        case 'INCREMENT':
        return {
            count: state.count + action.incrementBy
        };
        case 'DECREMENT':
        return {
            count: state.count - action.decrementBy
        };
        case 'RESET':
        return {
            count: 0
        };
        case 'SET':
        return {
            count: action.count
        }
        default :
            return state;
    }

    console.log('running');
    return state;
});

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
});


store.dispatch(incrementCount({incrementBy: 5}));
store.dispatch(incrementCount());
store.dispatch(decrementCount());
store.dispatch(decrementCount({decrementBy: 100}));

store.dispatch(reset());
store.dispatch(set({count: 200}));

// store.dispatch(
//     {
//         type: 'INCREMENT',
//         incrementBy: 5
//     }
// );
// store.dispatch(
//     {
//         type: 'INCREMENT'
//     }
// );

// //unsubscribe();

/*
store.dispatch(
    {
        type: 'DECREMENT',
        decrementBy: 10
    }
);
*/
store.dispatch(
    {
        type: 'RESET'
    }
);

store.dispatch({
    type: 'SET',
    count: 100
});


