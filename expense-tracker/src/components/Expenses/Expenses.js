import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import '../Expenses/Expenses.css';
import ExpenseFilter from './ExpensesFilter'
import { useState } from 'react';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022')
  
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  let expensesContent = <p>No Expense Found.</p>

  if(filteredExpenses.length > 0){
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem 
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
      />
    ))
  }

  return (
    <div>
    <Card className="expenses">
      <ExpenseFilter 
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expensesContent}
    </Card>
    </div>
  );
}

export default Expenses;
