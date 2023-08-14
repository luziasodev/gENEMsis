import React from 'react'

import Phrase from '../Phrase/Phrase'
import './Section.css'

export default function Section() {
  const phrases = ["aaaa", "bbbb", "cccc"];

  return (
    <div className='section'>
      {phrases.map((phrase) => <Phrase>{phrase}</Phrase>)}
    </div>
  )
}
