import React, { useState } from "react";
import Cart from "./compnents/Cart/Cart";
import JobLecList from "./compnents/JobLec/JobLecList";
import Footer from "./compnents/Layout/Footer";
import Header from "./compnents/Layout/Header";
import Main from "./compnents/Layout/Main";
import CartProvider from "./store/CartProvider";




const App = () => {


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
      <JobLecList/>
     </Main>
    <Footer/>
    </CartProvider>

  );
}

export default App;
