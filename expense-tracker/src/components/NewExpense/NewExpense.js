import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  let [toggle, setToggle] = useState(false)
  
  function toggleOn(){
    setToggle(!toggle)
    console.log(toggle)
  }

  const onSaveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData)
  }

  const expenseForm = <div className="new-expense">
  <ExpenseForm onSaveExpenseData={onSaveExpenseData} toggle={setToggle} />
  </div>

  const toggleButton = <div className="new-expense"><button 
  onClick={toggleOn}>Add New Expense</button></div>

  return (
    toggle ? expenseForm : toggleButton
  );
};

export default NewExpense;
