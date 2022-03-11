import React from 'react'
import classes from './CartItem.module.css'

const CartItem = (props) => {
  return (
    <li className={classes['cartItem']}>
      <h2>{props.name}</h2>
      <div className={classes.summary}>
        <span className="time">${props.time}</span>
        <span className="price">${props.price}</span>
        <input type="checkbox" defaultChecked  ></input>
        <span ></span>
      </div>
    </li>
  )
}

export default CartItem