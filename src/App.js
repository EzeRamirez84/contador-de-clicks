import logo from './logo.svg';
import './App.css';
import Contador from './componentes/Contador';
import Boton from './componentes/Boton';
import imagenPng from './imagenes/reactlogo.png';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const countClick=()=>{
    setNumClicks(numClicks+1);
  }
  const resetCounter=() =>{
    setNumClicks(0);
  }

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src={imagenPng}
          alt='Logo de freecodecamp'
          />
      </div>
      <div className='contenedor-principal'>
        <Contador 
          numClicks={numClicks} />
        <Boton 
          text='Click'
          isClickButton={true}
          clickHandle={countClick}
          />
        <Boton 
          text='Reset'
          isClickButton={false}
          clickHandle={resetCounter}
        />
      </div>
    </div>
  );
}

export default App;
