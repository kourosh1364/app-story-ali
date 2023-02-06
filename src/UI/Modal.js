import React from 'react'
import './Modal.css'
import Header from '../components/Header/Header'


const Modal = (props) => {
  return <div className='modals'
     
        style={{
          transform : props.show==6 ? 'translateY(0)' : 'translateY(-100vh)' ,
          opacity : props.show==6 ? '1'  : '0' ,
        }

        }>
         {console.log('modal1111')}
        {props.show}
        {props.children}
      
    </div>
  
}

export default Modal;
