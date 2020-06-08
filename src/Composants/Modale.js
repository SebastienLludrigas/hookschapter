import React from 'react';
import './Modale.css';

export default function Modale({ closeFunc, stopPropa }) {
   return (
      <div className="overlay" onClick={closeFunc}>
         <div className="contenu" onClick={stopPropa}>
            Hello Modale
            <button className="btnClose" onClick={closeFunc}>Fermer</button>
         </div>
      </div>
   )
}
