// AddExpenseForm.js

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenseActions';
import './App.css';



const AddExpenseForm = ({ addExpense }) => {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !amount) return;
        const newExpense = {
            id: Math.random(), // Генерируем уникальный идентификатор
            name,
            amount: parseFloat(amount),
        };
        addExpense(newExpense);
        setName('');
        setAmount('');
    };

    return (
        <div>
            <h2>Add Expense</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default connect(null, { addExpense })(AddExpenseForm);
