import React, { useState } from 'react'
import Card from '../UI/Card'
import classes from './AddUser.module.css'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'

function AddUser(props) {
    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')
    const [error, setError] = useState(0)
    const addUserHandler = (event) => {
        event.preventDefault()
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError(1)
            return;
        }
        if(+enteredAge < 1){
            setError(2)
            return;
        }

        const userData = {
            id: Math.random().toString(),
            name: enteredUsername,
            age: enteredAge
        }
        props.addData(userData)
        setEnteredAge('')
        setEnteredUsername('')
    }

    const cancelClick = () => {
        setError(0)
    }

    let errorMessage;
    
    if(error === 1){
         errorMessage = <ErrorModal title='All Field Required!' message='All field are required to proceed' onClick={cancelClick}/>
    } else if(error === 2){
        errorMessage = <ErrorModal title='Age Error!' message='Age must be greater than 0' onClick={cancelClick}/>
    } else {
        errorMessage = null
    }

    

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value)
    }
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }
    return (
    <div> 
    {/* <ErrorModal title='An Error Occured' message='Something went wrong!' /> */}
    {errorMessage}
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input id='username' type='text' value={enteredUsername} onChange={usernameChangeHandler} />
        <label htmlFor='age'>Age (Years)</label>
        <input id='age' type='number' value={enteredAge} onChange={ageChangeHandler} />
        <Button type='submit'>Add User</Button>
    </form>
    </Card>
    </div>
  )
}

export default AddUser