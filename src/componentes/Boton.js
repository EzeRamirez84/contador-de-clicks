import React from 'react';
import '../style/Boton.css'

function Boton({text, 
  isClickButton, 
  clickHandle}){
  return(
    <button 
      className={isClickButton?'click-button':'reset-button'}
      onClick={clickHandle}
      >
      {text}
    </button>
  )
}

export default Boton;