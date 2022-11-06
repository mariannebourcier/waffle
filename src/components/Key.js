import React from 'react';

export default function Key({ keyValue, bigKey }) {
  return (
    <div className='key' id={bigKey && "big"}>
      {keyValue}
    </div>
  )
}