import moment from 'moment';
import filterReducer from '../../reducers/filters';
import expenses from '../fixtures/expenses';


test('should setup default filter values', () => {
    const state = filterReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', () => {
    const state = filterReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('should set text filter', () => {
    const action = {type: 'SET_TEXT_FILTER', textToFilter: 'test'};
    const state = filterReducer(expenses, action);
    expect(state.text).toBe('test');
});

test('should set startDate filter', () => {
    const startDate = moment(0).valueOf();

    const action = {type: 'SET_START_DATE', startDate:startDate};
    const state = filterReducer(expenses, action);
    expect(state).toEqual({...expenses, startDate: startDate});
});

test('should set endDateFilter', () => {
    const endtDate = moment(0).valueOf();
    const action = {type: 'SET_END_DATE', endDate:moment(0).valueOf()};
    const state = filterReducer(expenses, action);
    expect(state).toEqual({...expenses, endDate: moment(0).valueOf()});
});

