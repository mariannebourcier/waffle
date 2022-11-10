import React, { useContext } from 'react';
import { AppContext } from '../App';

export default function GameOver() {
  const { gameOver, setGameOver, correctWord, currentAttempt } = useContext(AppContext)
  return (
    <div className='gameOver'>
      <h3>
      {gameOver.guessedWord ? "You correctly guessed the word!": "You lose"}
      </h3>
      <h1>The correct word was: {correctWord}</h1>
      {gameOver.guessedWord && (<h3>You guessed in {currentAttempt.attempt} attempts.</h3>)}
    </div>
  )
}