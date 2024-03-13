import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/expenseReducer';
import AddExpenseForm from './components/AddExpenseForm';
import ExpenseList from './components/ExpenseList';
import TotalExpenses from './components/TotalExpenses';
import './App.css';

// Создание Redux store с использованием rootReducer
const store = createStore(rootReducer);

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <h1>Expense Tracker</h1>
                <AddExpenseForm />
                <ExpenseList />
                <TotalExpenses />
            </div>
        </Provider>
    );
};

export default App;

// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;

