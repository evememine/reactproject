import React from 'react'
import classes from './CartButton.module.css'
import CartIconModal from '../Commons/CartIconModal'

const CartButton = (props) => {
  return (
    <CartIconModal>
    <button className={classes.button} onClick={props.onOpen}>
        <span className={classes.icon}>
          <img className={classes.img} src="https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/000000/external-cart-user-interface-icongeek26-linear-colour-icongeek26.png"
            alt='cartIcon'  
           /></span>
    </button>
    </CartIconModal>
  )
}

export default CartButton