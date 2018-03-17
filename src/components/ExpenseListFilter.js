import React from 'react';
import {connect} from 'react-redux';
import {DateRangePicker} from 'react-dates';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../actions/filters';
import { fail } from 'assert';


class ExpenseListFilters extends React.Component {

    state ={
        calendarFocused: null
    };

     onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
        
     };

     onFocusChange = (calendarFocused) => {
        this.setState(() => ({calendarFocused}));
     };

    render () {
        return(<div>
            <input type="text" value={this.props.filters.text} onChange={(e) => 
               { 
                   this.props.dispatch(setTextFilter(e.target.value));
                   //console.log(e.target.value);
               }
            }/>
            <select 
            value={this.props.filters.sortyBy}
            onChange={ (e) => {
                const sortyBy = e.target.value;
                //console.log(sortyBy);
                if (sortyBy === 'amount'){
                    this.props.dispatch(sortByAmount());
                } else if (sortyBy === 'date') {
                    this.props.dispatch(sortByDate());
                }
            }
            }>
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </select>
    
            <DateRangePicker 
                startDate = {this.props.filters.startDate}
                endDate = {this.props.filters.endDate}
                onDatesChange = {this.onDatesChange}
                focusedInput = {this.state.calendarFocused}
                onFocusChange = {this.onFocusChange}
                numberOfMonths ={1}
                isOutsideRange={() => false}
                showClearDates={true}
            />
        </div>);
    }
 }

const mapStateToProps = (state) => (
    {
        filters: state.filters
    }
);

export default connect(mapStateToProps)(ExpenseListFilters);