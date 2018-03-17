import uuid from 'uuid';

// Add action generators to dispatch changes to state

// ADD_EXPENSE
export const addExpense = (
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
  export const removeExpense = ({id} = {}) => (
      {
          type: 'REMOVE_EXPENSE',
          id: id
      }
  );
  
  // EDIT_EXPENSE
  export const editExpense = (id, expense = {}) => (
      {
          type: 'EDIT_EXPENSE',
          update: expense,
          id:id
      }
  );