import React,{useState} from "react";
import "./ExpenseForm.css";

 function ExpenseForm(props) {
     const[enteredTitle,setEnteredTitle]=useState('');
     const[enteredAmount,setEnteredAmount]=useState('');
     const[enteredDate,setEnteredDate]=useState('');
     const titleChangeHandler=(event)=>{
         setEnteredTitle(event.target.value);
     }
     const amountChangeHandler=(event)=>{
         setEnteredAmount(event.target.value);
     }
     const dateChangeHandler=(event)=>{
         setEnteredDate(event.target.value);
     }
     const SubmitHandler=(event)=>{
         event.preventDefault();
         const expenseData={
             title:enteredTitle,
             amount:enteredAmount,
             date:new Date(enteredDate)
         }
         console.log(expenseData);
         props.onSaveExpense(expenseData);
         setEnteredTitle('');
         setEnteredAmount('');
         setEnteredDate('');
     };
  return (
      
        <form onSubmit={SubmitHandler}>
            <div className='new-expense_controls'>
                <div className='new-expense_control'>
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div>
                    <label>Amount</label>
                    <input type="number"min="0.01"step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div>
                    <label>Date</label>
                    <input type="date" value={enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense_action'>
                <button type ="submit">Add Expense</button>
            </div>
        </form>

      
  );
}
export default ExpenseForm;
