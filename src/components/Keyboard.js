import React from 'react'
import Key from './Key'

export default function Keyboard() {
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "x", "C", "V", "B", "N", "M"];

  return (
    <div className="keyboard">
      <div className="line1">
        {keys1.map((key) => {
          return <Key keyValue={key}/>
        })}
      </div>
      <div className="line2">
        {keys2.map((key) => {
          return <Key keyValue={key}/>
        })}
      </div>
      <div className="line3">
        <Key keyValue={"Enter"} bigKey/>
        {keys3.map((key) => {
          return <Key keyValue={key}/>
        })}
        <Key keyValue={"Delete"} bigKey/>
      </div>

    </div>
  )
}

