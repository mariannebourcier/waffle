import React, { useState } from 'react'
import { boardDefault } from './helpers/Words'

export default function Board() {
  const [board, setBoard] = useState(boardDefault);

  return (
    <div className="board">
      {""}
      <div className="row"></div>
      <div className="row"></div>
      <div className="row"></div>
      <div className="row"></div>
      <div className="row"></div>
      <div className="row"></div>
    </div>
  )
}
