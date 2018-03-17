import React from 'react';
import {NavLink} from 'react-router-dom';


const ExpenseListItem = ({ id, description, amount, createdAt}) => (
    <div>
    <NavLink to={`/edit/${id}`} activeClassName="is-active">{description}</NavLink>
        : {amount}: {createdAt}
    </div>
);

export default ExpenseListItem;