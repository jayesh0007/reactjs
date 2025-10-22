import React from 'react'
import ReactDom from 'react-dom'

function Modal({isOpen, children}) {

if(!isOpen) return null;
  return ReactDom.createPortal(
    <div style={{position:'fixed', top:'50px', left:'50%',transform: 'translate(-50%,-50%)'}}>
        {children}</div>,
        document.body
  )
}

export default Modal
