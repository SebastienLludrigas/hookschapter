import React, {useState, useMemo, useCallback} from 'react'
import Enfant from './Enfant'
export default function Contenu() {

   const [compteur, setCompteur] = useState(0);

   console.log('Parent à jour');

   const array = useMemo(() => {
      return [1, 2, 3, 4, 5, 6, 7, 8]
   }, [])

   const foo = useCallback(() => {
      console.log('Clic');
   }, [])

   return (
      <div>
        <h1>Le parent</h1>
         <p>{compteur}</p>
         <button onClick={() => setCompteur(compteur + 1)}>Click me</button> 
         <Enfant chaine={array} myFunc={foo}/>
      </div>
   )
}
