import moment from 'moment';
import {setStartDate, 
    setEndDate, 
    sortByAmount, 
    sortByDate,
    setTextFilter}
from '../../actions/filters';

test('should generate set start date action objjuect', () => {
    const action = setStartDate(moment(0));

    expect(action).toEqual(    {
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should generate set end date action objjuect', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual(    {
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('should generate sortByAmount', () => {
    expect(sortByAmount()).toEqual(
        {
            type:'SORT_BY_AMOUNT'
        }  
    );
});

test('should generate sortByDate', () => {
    expect(sortByDate()).toEqual(
        {
            type:'SORT_BY_DATE'
        }  
    );
});

test('should generate setTextFilter with default value', () => {
    const action = setTextFilter();

    expect(action).toEqual(
        {
            type:'SET_TEXT_FILTER',
            textToFilter: ''
        }  
    );
});

test('should generate setTextFilter with given value', () => {
    const text = 'rent;'
    const action = setTextFilter(text);

    expect(action).toEqual(
        {
            type:'SET_TEXT_FILTER',
            textToFilter: text
        }  
    );
});

