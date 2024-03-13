// ExpenseList.js

import React from 'react';
import { connect } from 'react-redux';
import { deleteExpense } from '../actions/expenseActions';
import './ExpenseList.css';


const ExpenseList = ({ expenses, deleteExpense }) => {
    return (
        <div>
            <h2>Expense List</h2>
            <ul>
                {expenses.map((expense) => (
                    <li key={expense.id}>
                        {expense.name} - ${expense.amount}
                        <button onClick={() => deleteExpense(expense.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses,
    };
};

export default connect(mapStateToProps, { deleteExpense })(ExpenseList);
//
//
// const ExpenseList = ({ expenses, deleteExpense }) => {
//     return (
//         <div style={{marginTop: '20px', marginLeft: '250px',}}>
//             <h2 style={{color: 'blue'}}>Expense List</h2>
//             <ul style={{listStyleType: 'none', padding: 0}}>
//                 {expenses.map((expense) => (
//                     <li key={expense.id} style={{
//                         marginBottom: '10px',
//                         backgroundColor: '#f9f9f9',
//                         borderRadius: '5px',
//                         padding: '10px',
//                         boxShadow: '0 2px 4px rgba  (0, 0, 0, 0.1)'
//                     }}>
//                         {expense.name} - ${expense.amount}
//                         <button onClick={() => deleteExpense(expense.id)} style={{
//                             marginLeft: '10px',
//                             padding: '5px 10px',
//                             backgroundColor: '#f44336',
//                             color: 'white',
//                             border: 'none',
//                             borderRadius: '3px',
//                             cursor: 'pointer'
//                         }}>
//                             Delete
//                         </button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//
//     );
// };
//
// const mapStateToProps = (state) => {
//     return {
//         expenses: state.expenses,
//     };
// };
//
// export default connect(mapStateToProps, {deleteExpense})(ExpenseList);
