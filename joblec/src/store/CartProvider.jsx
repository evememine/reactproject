import React, {  useState } from 'react'
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
    
    const existingCartItemIndex = cartState.items.findIndex(
        (cartItem) => cartItem.id === item.id
    );

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

  // const ifCartIsNull= ()=>

// 하나씩 삭제하는 메서드
  const removeItemFromCartHandler = (id) => {

    const removedCartItem = cartState.items.filter((item)=> item.id !== id);

    setCartState(
      {items: removedCartItem , totalAmount: cartState.totalAmount-1}
      )};

// 전체 삭제 메서드
  const removeAllItemFromCartHandler = ()=>{

    setCartState({items: [], totalAmount: 0})
  };

  const cartContext = {
      items: cartState.items,
      totalAmount: cartState.totalAmount,
      addItem: addItemToCartHandler,
      removeItem: removeItemFromCartHandler,
      removeAllItem: removeAllItemFromCartHandler,
  }
  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
}

export default CartProvider