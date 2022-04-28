import React, {useState, useCallback} from 'react';
import Button from './components/UI/Button/Button';

import './App.css';

function App() {

const [showParagraph, setShowParagraph] = useState(false);
const [allowToogle, setAllowToogle] = useState(false);

const toogleParagraphHandler = useCallback(() => {
   if (allowToogle) {   
   setShowParagraph((prevShowParagraph) => !prevShowParagraph); 
  }
}, [allowToogle]);


const allowToogleHandler = () => {
  setAllowToogle(true);
}



  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <p>Parrafo Oculto</p>}
      <Button onClick={allowToogleHandler}>Activa Boton</Button>
      <Button onClick={toogleParagraphHandler}>Oculta Parrafo</Button>
    </div>
  );
}


export default App;
