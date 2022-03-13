import React from 'react'
import CartContext from '../../store/CartContext'
import Button from '../Commons/Button'
import classes from './CartItem.module.css'

const CartItem = (props) => {



  return (


    <li className={classes.cartItem}>
      <h2>{props.lecture}</h2>
      <div className={classes.summary}>
        <span className={classes.date}>{props.date}</span>
        <span className={classes.headcount}>현재{props.headcount + 1}명</span>
      <Button onClick={props.onClick}>삭제</Button>

        <span ></span>
      </div>
    </li>
  )
}

export default CartItem