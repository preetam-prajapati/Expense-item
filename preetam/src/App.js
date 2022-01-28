import React,{useState} from 'react';

import Expenses from './Component/Expenses';
import NewExpense from './Component/NewExpense';

let DUMMY_EXPENSE =[
      {
            id:'e1',
            date:new Date(2021,12,15),
            title:'School Fee',
            amount:400,
      },
      {
           id:'e2',
           date:new Date(2021,10,16),
           title:'Food',
           amount:600,
     },
     {
           id:'e3',
           date:new Date(2021,11,15),
           title:'Book',
           amount:230,
     },
     {
           id:'e4',
           date:new Date(2021,12,14),
           title:'House Rent',
           amount:800,
     },
]

 function App() {
       const [expenses,setExpenses]=useState(DUMMY_EXPENSE);
       const addExpenseHandler=(expense)=>{
             const updateExpense=[expense,...expenses];
            setExpenses(updateExpense);
       }
       
     
  return(
      <div>
            <NewExpense onaddExpense={addExpenseHandler}/>
       <Expenses item={expenses}/>
      </div>
  ) 
}
export default App;
