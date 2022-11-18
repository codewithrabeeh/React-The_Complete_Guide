import { useState } from 'react'
import React from 'react'
import Output from './Output'

function Greeting() {
    const [changedText, setChangedText] = useState(false)

    const changeTextHandler = () => {
        setChangedText(true)
    }

  return (
    <div>
    <h2>Hello World!</h2>
     {!changedText && <Output>Its good to see you!</Output>}
    {changedText && <Output>Changed!</Output>}
    <button onClick={setChangedText}>Change Text!</button>
    </div>
  )
}

export default Greeting