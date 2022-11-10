import React from 'react'
import { useContext, useEffect, useState } from 'react'

import CartContext from '../../Store/cart-context'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'

function HeaderCartButton(props) {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false)
  const cartCtx = useContext(CartContext)

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount 
  }, 0)

  const {items} = cartCtx

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`

  useEffect(() => {
    if(cartCtx.items.length === 0){
      return;
    }

    setBtnIsHighlighted(true)

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false)
    }, 300)

    return () => {
      clearTimeout(timer)
    }

  }, [items]) 

  return (
    <button  onClick={props.buttonHandler} className={btnClasses}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
            {numberOfCartItems}
        </span>
    </button>
  )
}

export default HeaderCartButton