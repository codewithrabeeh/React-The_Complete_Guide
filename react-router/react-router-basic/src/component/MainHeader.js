import React, {Fragment} from 'react'
import { NavLink } from 'react-router-dom' // Replace Link with NavLink
import classes from './mainHeader.module.css'

function MainHeader() {
  return (
    <Fragment>
        <ul style={{display: 'flex', justifyContent: 'space-around', listStyle: 'none', textDecoration: 'none'}}>            
            <li><NavLink activeClassName={classes.active} to='/welcome'>Welcome</NavLink></li>
            <li><NavLink activeClassName={classes.active} to='/products'>Products</NavLink></li>            
        </ul>
    </Fragment>
  )
}

export default MainHeader