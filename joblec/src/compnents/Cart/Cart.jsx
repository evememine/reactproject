import React, { useContext, useState } from 'react'
import Modal from '../Commons/Modal'
import classes from './Cart.module.css'
import CartItem from './CartItem';
import Button from '../Commons/Button'
import CartContext from '../../store/CartContext';

const LISTS = [
  {
      id: "F1",
      lecture: "반응형 웹페이지 쉽게 만드는 법",
      mentor: "곽형수",
      date: "2022-03-14 4시",
      image: "https://board.jinhak.com/BoardV1/Upload/Job/CatchDotProgram/Image/234_0204_095207.jpg",
      headcount: 79,
  },
  {
      id: "D3",
      lecture: "취준생 맞춤 친절한 빅데이터",
      mentor: "조성준",
      date: "2022-03-22 4시",
      image: "https://board.jinhak.com/BoardV1/Upload/Job/CatchDotProgram/Image/234_0107_093311.jpg",
      headcount: 79,
  },
  {
      id: "F5",
      lecture: "좋은 포트폴리오 vs 나쁜 포트폴리오",
      mentor: "송성훈",
      date: "2022-03-18 4시",
      image: "https://board.jinhak.com/BoardV1/Upload/Job/CatchDotProgram/Image/234_0310_095629.jpg",
      headcount: 100,
  },
  {
      id: "B6",
      lecture: "무엇이든 물어보세요 | 백엔드 편",
      mentor: "김장군",
      date: "2022-03-18 6시",
      image: "https://board.jinhak.com/BoardV1/Upload/Job/CatchDotProgram/Image/234_0310_100052.jpg",
      headcount: 100,
  },
]

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
    {cartContext.items.map((joblec)=>(
      <CartItem
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

const modalButton  = (
  <div className={classes.buttons}>
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