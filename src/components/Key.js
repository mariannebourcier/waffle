import React, { useContext } from 'react';
import { AppContext } from '../App';


export default function Key({ keyValue, bigKey }) {
  const { board, setBoard, currentAttempt, setCurrentAttempt } = useContext(AppContext) 
  const selectLetter = () => {
    if (keyValue === "ENTER") {
      if (currentAttempt.letterPos !== 5) return;
      setCurrentAttempt({attempt: currentAttempt.attempt + 1 })
    } else {

  
    //check to change line when word done
    if (currentAttempt.letterPos > 4) return; 
    const currentBoard = [...board]
    currentBoard[currentAttempt.attempt][currentAttempt.letterPos] = keyValue
    setBoard(currentBoard)
    setCurrentAttempt({...currentAttempt, letterPos: currentAttempt.letterPos + 1 })
  }
}
  return (
    <div className='key' id={bigKey && "big"} onClick={selectLetter}>
      {keyValue}
    </div>
  )
}