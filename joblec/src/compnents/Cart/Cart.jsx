import React, { useContext, useState } from 'react'
import Modal from '../Commons/Modal'
import classes from './Cart.module.css'
import CartItem from './CartItem';
import Button from '../Commons/Button'
import CartContext from '../../store/CartContext';


const Cart = (props) => {

const cartContext = useContext(CartContext);

const cartItems = (
  <ul className={classes['cartItems']}>
    {cartContext.items.map(()=>(
      <CartItem
      />
    ))}
  </ul>
)

const cartItemsTotal = (
  <div className={classes.total}>
    <span>Total Amount</span>
    <span>자세한 할인 혜택을 확인해보세요.</span>
    </div>
)

const modalButton  = (
  <div className={classes.buttons}>
  <Button onClick={props.onClose}>Close</Button>
  <Button>Order</Button>
  </div>
);

const cartModalContent = (
  <>
  {/* 장바구니 목록 (cartItems) */}
  {cartItems}
  {/* 장바구니 목록 총합(cartItemsTotal) */}
  {cartItemsTotal}
  {/* 취소, 주문 버튼(modalButton) */}
  {modalButton}
  </>
)


return <Modal onClose={props.onClose}>{cartModalContent}</Modal>
}

export default Cart