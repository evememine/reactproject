import React, { useContext, useState } from 'react'
import Modal from '../Commons/Modal'
import classes from './Cart.module.css'
import CartItem from './CartItem';
import Button from '../Commons/Button'
import CartContext from '../../store/CartContext';

const Cart = (props) => {

  const cartContext = useContext(CartContext);

  const cartTitle = (
    <ul className={classes.carttitle}>
      신청한 강의
      <hr />
    </ul>
  )


  const cartItems = (
    <ul className={classes['cartItems']}>
      {cartContext.items.map((joblec) => (
        <CartItem
          onClick = {() => cartContext.removeItem(joblec.id)}
          key={joblec.id}
          lecture={joblec.lecture}
          date={joblec.date}
          headcount={joblec.headcount}
        />
      ))}
    </ul>
  )
  const totalAmount = `총 ${cartContext.totalAmount}개`;

  const cartItemsTotal = (
    <div className={classes.total}>
      <span></span>
      <span>{totalAmount}</span>
    </div>
  )
  


  const modalButton = (
    <div className={classes.buttons}>
      <Button onClick={cartContext.removeAllItem}>전체 삭제</Button>
      <Button onClick={props.onClose}>닫기</Button>
    </div>
  );

    

  const cartModalContent = (
    <>
      {cartTitle}
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