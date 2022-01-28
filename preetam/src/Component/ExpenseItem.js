
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

 function ExpenseItem(props) {
   
  
  return (
      <div className='expense-item'>
         <ExpenseDate date={props.date}/>
          <div className='expense-item_title'>
              <h1 className="expense-item_h1">{props.title}</h1>
              <div className='expense-item_price'>${props.amount}</div>
          </div>

        
      </div>
  );
}
export default ExpenseItem;
