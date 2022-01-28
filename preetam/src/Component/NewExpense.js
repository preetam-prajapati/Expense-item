import "./NewExpense.css";
import ExpenseForm from './ExpenseForm';

 function NewExpense(props) {
     const SaveExpenseHandler=(enteredExpense)=>{
         console.log(enteredExpense);
         props.onaddExpense(enteredExpense);
         

     }
  return (
      <div className='new-expense'>
          <ExpenseForm onSaveExpense={SaveExpenseHandler}/>

      </div>
  );
}
export default NewExpense;
