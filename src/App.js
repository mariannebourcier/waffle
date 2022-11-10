import './App.css';
import Board from './components/Board';
import { boardDefault, generateWordSet } from './Words';
import Keyboard from './components/Keyboard';
import { createContext, useEffect, useState } from 'react';

//have access to const in all components
export const AppContext = createContext();

export default function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currentAttempt, setCurrentAttempt] = useState({ attempt: 0, letterPos: 0 })

  const correctWord = "RIGHT"

  useEffect(() => {
    generateWordSet().then((words) => {
      console.log(words);
    })
  }, [])

  //helper functions
  const onSelectLetter = (keyValue) => {
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


  return (
    <div className="App">
      <nav>
        <h1>Waffle</h1>
      </nav>
      <AppContext.Provider value={{
        board,
        setBoard,
        currentAttempt,
        setCurrentAttempt,
        onSelectLetter,
        onDelete,
        onEnter,
        correctWord
         }}>
      <Board />
      <Keyboard />
    
      </AppContext.Provider> 
    </div>
  );
}

