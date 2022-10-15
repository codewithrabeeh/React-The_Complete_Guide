import React from 'react'
import Card from '../UI/Card'
import classes from './UsersList.module.css'

function UsersList(props) {
    console.log(props.users)
  return (
    <Card className={classes.users}>
    <ul>
     {props.users.map((e) => <li key={e.id}>{e.name} ({e.age} years old)</li>)}
    </ul>
    </Card>
  )
}

export default UsersList