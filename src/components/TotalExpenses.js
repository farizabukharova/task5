// TotalExpenses.js

import React from 'react';
import { connect } from 'react-redux';
import './App.css';



const TotalExpenses = ({ expenses }) => {
    const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);
    return (
        <div>
            <h2>Total Expenses</h2>
            <p>Total: ${total}</p>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses,
    };
};

export default connect(mapStateToProps)(TotalExpenses);

