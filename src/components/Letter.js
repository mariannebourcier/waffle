import React, { useContext, useEffect } from 'react';
import { AppContext } from '../App';

export default function Letter({ letterPosition, attemptValue }) {
  const { board, correctWord, currentAttempt, disabledLetters, setDisabledLetters } = useContext(AppContext)
  const letter = board[attemptValue][letterPosition];
  //check letters against word
  const correct = correctWord[letterPosition] === letter;
  const almost = !correct && letter !== "" && correctWord.includes(letter);
  const letterState = 
    currentAttempt.attempt > attemptValue &&
    (correct ? "correct" : almost ? "almost" : "error")


    useEffect(() => {
      if (letter !== "" && !correct && !almost) {
        setDisabledLetters([...disabledLetters, letter])
      }
    }, [currentAttempt.attempt])
  return (
    <div className="letter" id={letterState}>{letter}</div>
  )
}