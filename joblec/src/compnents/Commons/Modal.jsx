import React from 'react'
import ReactDom from 'react-dom'
import classes from './Modal.module.css'

const Background = (props =>{
  return <div className={classes.background} onClick={props.onClose}></div>
})

const ModalWindow = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const portalElement = document.getElementById('modal-window');


const Modal = (props) => {
  return (
    <>
    ReactDom.createPortal(<Background onClose={props.onClose} /> ,portalElement)
    ReactDom.createPortal(<ModalWindow>{props.children}</ModalWindow>, portalElement) 
    </>
  )
    
}

export default Modal