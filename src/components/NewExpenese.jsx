import { useState } from "react";

function NewExpense(props) {


   const[tValue,setValue]=useState('');
   const[lAmount,setAmount]=useState('');
   const[lDate,setDate]=useState('');

    function submitHandle(){
        const expenseData={
            title:tValue,
            amount:lAmount,
            date:new Date(lDate),
        };
         props.onCalling(expenseData);
    }

      return(
    <div className="new-expenese">
        <h2>New Expense</h2>

    <div className="new-expense-cntrl">

        <div className="new-expense-control">
            <label>Title</label>
            <input type="text" 
            value={tValue}
            onChange={(event) => setValue(event.target.value)} />
        </div>

        <div className="new-expense-control">
            <label>Amount</label>
            <input type="number" 
            value={lAmount}
            onChange={(event)=>setAmount(event.target.value)}
            />
        </div>

    </div>

     <div className="new-expense-cntrl">

        <div className="new-expense-control">
            <label>Date</label>
            <input type="date" 
            value={lDate}
            onChange={(event)=>setDate(event.target.value)}
            />
        </div>

        <div className="new-expense-action">
           <button type="button" onClick={submitHandle}>Add Expense</button>
        </div>

    </div>
    </div>
    );
}
export default NewExpense;