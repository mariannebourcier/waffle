import React, { useContext } from 'react';
import { AppContext } from '../App';


export default function Key({ keyValue, bigKey }) {
  const { board, setBoard } = useContext(AppContext) 
  const selectLetter = () => {
    const currentBoard = [...board]
    currentBoard[0][0] = keyValue
    setBoard(currentBoard)
  }
  return (
    <div className='key' id={bigKey && "big"} onClick={selectLetter}>
      {keyValue}
    </div>
  )
}