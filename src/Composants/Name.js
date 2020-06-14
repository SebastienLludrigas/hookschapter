import React from 'react'
import { useDispatch } from 'react-redux'

const Name = () => {

   const dispatch = useDispatch();

   const handleUpdate = (evt) => {
      dispatch({
         type: 'UPDATE',
         payload: evt.target.value,
      })
   }

   return (
      <div>
         <input 
         type="text"
         placeholder="Tapez du texte"
         onChange={handleUpdate}
         />
      </div>
   )
}

export default Name;
