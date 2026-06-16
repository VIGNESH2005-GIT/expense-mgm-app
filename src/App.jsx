import ExpenseItem from './components/ExpenseItem';
import NewExpense from './components/NewExpenese';
import './App.css';
import { useState } from 'react';

function App() {

const [expense,setExpense]=useState([
   {title:"Toilet Paper", amount:94.12,date:new Date(2020, 7, 14)},
   { title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    { title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28) },
]);

  function addExpense(data){
   setExpense((prevExpense)=>[data,...prevExpense]);
  }

  return (
    <div>
      <h1>Expense Manager</h1>
      <NewExpense onCalling={addExpense}/>

      {expense.map((a,i)=>(
        <ExpenseItem
        key={i}
        title={a.title}
        amount={a.amount}
        date={a.date} 
      />
      ))}
    </div>
  );
}

export default App;