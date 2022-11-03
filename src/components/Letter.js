import React, { useContext } from 'react';
import { AppContext } from '../App';

export default function Letter({ letterPosition, attemptValue }) {
  const { board } = useContext(AppContext)
  return (
    <div className="letter"></div>
  )
}