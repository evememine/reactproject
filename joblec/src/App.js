import React, { useState } from "react";
import Footer from "./compnents/Layout/Footer";
import Header from "./compnents/Layout/Header";
import Main from "./compnents/Layout/Main";
import Row from "./compnents/Lecture/Row";
import Cart from "./compnents/Cart/Cart";
import CartProvider from "./store/CartProvider";


function App() {

  const [cartIsShown, setCartIsShown] = useState(false);
  const [cartIconIsShown, setCartIconIsShown] = useState(true);

  const openCartHandler = () => {
    setCartIsShown(true);
    setCartIconIsShown(false);
  };

  const closeCartHandler = () => {
    setCartIsShown(false);
    setCartIconIsShown(true);
  };


  return (
    <CartProvider>
    {cartIsShown && <Cart onClose={closeCartHandler}/> }
    <Header onOpen={openCartHandler}/>
    <Main>
      
      <Row title="Frontend" fetchUrl="https://job-lecture-default-rtdb.firebaseio.com/frontend.json" />
      <Row title="Backend" fetchUrl="https://job-lecture-default-rtdb.firebaseio.com/backend.json" />
      <Row title="Data" fetchUrl="https://job-lecture-default-rtdb.firebaseio.com/data.json" />
      <Row title="AI" fetchUrl="https://job-lecture-default-rtdb.firebaseio.com/ai.json" />
    </Main>
    <Footer/>
    </CartProvider>
  );
}

export default App;
