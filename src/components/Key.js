import React, { useContext } from 'react';
import { AppContext } from '../App';


export default function Key({ keyValue, bigKey }) {
   const {
    board,
    setBoard, 
    currentAttempt, 
    setCurrentAttempt,
    onDelete,
    onEnter,
    onSelectLetter 
  } = useContext(AppContext) 

  const selectLetter = () => {
    if (keyValue === "ENTER") {
      onEnter()
    } else if (keyValue === "DELETE") {
      onDelete()
    } else {
      onSelectLetter(keyValue)
    }
  }

  return (
    <div className='key' id={bigKey && "big"} onClick={selectLetter}>
      {keyValue}
    </div>
  )
}