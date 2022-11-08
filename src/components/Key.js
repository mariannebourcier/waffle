import React, { useContext } from 'react';
import { AppContext } from '../App';
import SelectLetter from './helpers/SelectLetter';


export default function Key({ keyValue, bigKey }) {
//   const { board, setBoard, currentAttempt, setCurrentAttempt } = useContext(AppContext) 
//   const selectLetter = () => {
//     //new line for attempt
//     if (keyValue === "ENTER") {
//       if (currentAttempt.letterPos !== 5) return;
//       setCurrentAttempt({attempt: currentAttempt.attempt + 1, letterPos: 0 })
//     } //delete last letter
//     else if (keyValue === "DELETE") {
//       if (currentAttempt.letterPos === 0) return;
//       const currentBoard = [...board];
//       currentBoard[currentAttempt.attempt][currentAttempt.letterPos - 1] = "";
//       setBoard(currentBoard)
//       setCurrentAttempt({...currentAttempt, letterPos: currentAttempt.letterPos - 1})
//     } else {

  
//     //check to change line when word done
//     if (currentAttempt.letterPos > 4) return; 
//     const currentBoard = [...board]
//     currentBoard[currentAttempt.attempt][currentAttempt.letterPos] = keyValue
//     setBoard(currentBoard)
//     setCurrentAttempt({...currentAttempt, letterPos: currentAttempt.letterPos + 1 })
//   }
// }
  return (
    <div className='key' id={bigKey && "big"} onClick={SelectLetter}>
      {keyValue}
    </div>
  )
}