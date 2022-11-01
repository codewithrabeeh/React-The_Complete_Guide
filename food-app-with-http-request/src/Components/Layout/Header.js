import React, {Fragment} from 'react'

import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

import mealImage from '../../Assets/meals.jpg'


function Header(props) {
  return (
    <Fragment>
    <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton buttonHandler={props.showCartFunc}/> 
    </header>
     <div className={classes['main-image']}>
        <img src={mealImage} alt='A bunch of food'/>
     </div>
    </Fragment>
  )
}

export default Header