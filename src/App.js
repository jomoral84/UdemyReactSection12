import React, {useState} from 'react';
import Button from './components/UI/Button/Button';

import './App.css';

function App() {

const [showParagraph, setShowParagraph] = useState(false);

const toogleParagraphHandler = () => {
  setShowParagraph((prevShowParagraph) => !prevShowParagraph);
}



  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <p>Parrafo Oculto</p>}
      <Button onClick={toogleParagraphHandler}>Oculta Parrafo</Button>
    </div>
  );
}

export default App;
