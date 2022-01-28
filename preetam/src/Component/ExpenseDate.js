import './ExpenseDate.css';


 function ExpenseDate(props) {
    const date = props.date.toLocaleString('en-US',{date:'2-digit'});
    const year = props.date.getFullYear();
    const month = props.date.toLocaleString('en-US',{month:'long'});
  return (
      <div className='expense-date'>
           <div className="expense-date_date">{date}</div>
          <div className="expense-date_year">{year}</div>
          <div className="expense-date_month">{month}</div>
      </div>
  );
}
export default ExpenseDate;
