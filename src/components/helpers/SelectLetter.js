
import React, { useContext } from 'react';
import { AppContext } from '../../App';

export default function SelectLetter({ keyValue }) {
  const { board, setBoard, currentAttempt, setCurrentAttempt } = useContext(AppContext)

  const onSelectLetter = () => {
    if (currentAttempt.letterPos > 4) return;
    const currentBoard = [...board]
    currentBoard[currentAttempt.attempt][currentAttempt.letterPos] = keyValue
    setBoard(currentBoard)
    setCurrentAttempt({ ...currentAttempt, letterPos: currentAttempt.letterPos + 1 })
  }

  const onDelete = () => {
    if (currentAttempt.letterPos === 0) return;
    const currentBoard = [...board];
    currentBoard[currentAttempt.attempt][currentAttempt.letterPos - 1] = "";
    setBoard(currentBoard)
    setCurrentAttempt({ ...currentAttempt, letterPos: currentAttempt.letterPos - 1 })
  }

  const onEnter = () => {
    if (currentAttempt.letterPos !== 5) return;
    setCurrentAttempt({ attempt: currentAttempt.attempt + 1, letterPos: 0 })
  }
}
