import React, { useState } from 'react'
import { boardDefault } from './helpers/Words'
import Letter from './Letter';

export default function Board() {
  const [board, setBoard] = useState(boardDefault);

  return (
    <div className="board">
      {""}
      <div className="row"><Letter /></div>
      <div className="row"><Letter /></div>
      <div className="row"><Letter /></div>
      <div className="row"><Letter /></div>
      <div className="row"><Letter /></div>
      <div className="row"><Letter /></div>
    </div>
  )
}
