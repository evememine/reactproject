import React from 'react'
import classes from './Header.module.css'
import CartButton from '../Cart/CartButton'

const Header = (props) => {
  return (
    <>
    <header className={classes.header}>
        <img className={classes.logo} src="https://cdn.imweb.me/thumbnail/20210216/1a4d982e27593.png" alt="logo" />
        <button className={classes.button}>로그인</button>
        <CartButton onOpen={props.onOpen}/>
    </header>
    </>
  )
}

export default Header