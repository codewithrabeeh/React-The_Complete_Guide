import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import '../Expenses/ExpenseItem.css';
import {useState} from 'react';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title)
  function clickedIt(){
    setTitle('Updated')
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickedIt}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
