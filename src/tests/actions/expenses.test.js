import {addExpense, removeExpense, editExpense} from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id:'123abc'  
    });
});

test('should setup edit expense action object', () => {
    const action = editExpense(
        '123abc', 
        {
            description : 'coffee small',
            note:'cofee with friensds',
            amount : 1500,
            createdAt : 123 
          });

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        update: {
            description : 'coffee small',
            note:'cofee with friensds',
            amount : 1500,
            createdAt : 123  
          },
        id:'123abc'  
    });
});

test('should add new values to expense', () => {
    const  expenseData = {
        description : 'coffee small',
        note:'cofee with friensds',
        amount : 1500,
        createdAt : 123 
      };

    const action = addExpense (expenseData);

      expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id:expect.any(String)
          }  
      });
});

test('should add new default values to expense', () => {
    const action = addExpense ();

      expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description : '',
            note:'',
            amount : 0,
            createdAt : 0 ,
            id:expect.any(String)
          }  
      });
});