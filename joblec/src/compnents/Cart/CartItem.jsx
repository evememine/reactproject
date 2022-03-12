import React from 'react'
import classes from './CartItem.module.css'

const CartItem = (props) => {
  return (
    <li className={classes.cartItem}>
      <h2>{props.lecture}</h2>
      <div className={classes.summary}>
        <span className={classes.date}>{props.date}</span>
        <span className={classes.headcount}>현재{props.headcount +1}명</span>
        <input type="checkbox" defaultChecked></input>
        <span ></span>
      </div>
    </li>
  )
}

export default CartItem