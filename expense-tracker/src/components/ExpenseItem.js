import React from 'react'
import './ExpenseItem.css'

function ExpenseItem(props) {
    // const expenseDate = new Date(2021, 2, 28)
    // const expenseTitle = 'Car Insurance'
    // const expenseAmount = '$443'
  return (
    <div className='expense-item'>
        <div>{props.date}</div>
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>{props.amount}</div>
        </div>
    </div>
  )
}

export default ExpenseItem