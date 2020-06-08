import React, {useState} from 'react';
import './App.css';
import Modale from './Composants/Modale'


function App() {

  const [toggleModale, setToggleModale] = useState(false);

  const closeModale = (evt) => {
    setToggleModale(false)
  }

  const stopPropa = (evt) => {
    evt.stopPropagation();
  }

  const openModale = () => {
    setToggleModale(true)
  }

  return (
    <div className="App">
      <button onClick={openModale}>Ouvrir la Modale</button>
      {toggleModale && <Modale closeFunc={closeModale} stopPropa={stopPropa}/>}
    </div>
  );
}

export default App;
