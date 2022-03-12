import React, { useState } from 'react'
import CartContext from './CartContext'

const CartProvider = (props) => {
  const [cartState, setCartState] = useState({
    items: [],
    totalAmount: 0

  });

  // cart에 lecture 데이터를 추가하는 메서드
  const addItemToCartHandler = (item) => {
    console.log(item);


    // Add를 1개씩 여러번 추가하였을때 cart에 각각 listing 되지 않고,
    // 중복은 허락되지 않도록 해야함  
    
    // 이미 동일한 id값이 book이 cart에 존재할 경우, 해당 book은 추가하지 않음 
    const existingCartItemIndex = cartState.items.findIndex(
        (cartItem) => cartItem.id === item.id
    );

    // 동일한 id를 가진 lecture의 객체를 등록
    const existingCartItem = cartState.items[existingCartItemIndex];

    let updatedItems;

    if(existingCartItem) {// 방금 새로 등록한 item이 cart에 이미 존재할때
        const updatedItem = {
            ...existingCartItem,
        }
        updatedItems = [...cartState.items];
        updatedItems[existingCartItemIndex] = updatedItem;
    } else { // 방금 새로 등록한 item이 cart에 이미 존재하지 않을때
        updatedItems = cartState.items.concat(item);
        
      }
      
      const updatedTotalAmount = cartState.totalAmount + (existingCartItem ? 0 : 1);
    setCartState({items: updatedItems, totalAmount: updatedTotalAmount})

  };

  const cartContext = {
      items: cartState.items,
      totalAmount: cartState.totalAmount,
      addItem: addItemToCartHandler,
  }

  // 장바구니에 체크가 해제되면 강의 신청이 해제되는 메서드
  // const deleteItemFromCartHandler = 

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
}

export default CartProvider