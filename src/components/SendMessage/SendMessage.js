import React, { useState } from 'react'
import './SendMessages.css'

function SendMessage(props) {
  const [value, setValue] = useState("")

  function sendMessage(message) {
    props.sendMessage(message)
    setValue("")
  }

  function handleChange(event) {
    setValue(event.target.value)
  }

  function handleKeyDown(event) {
    if (event.ctrlKey && event.keyCode === 13) {
      sendMessage(value)
    }
  }

  return (
    <div className="SendMessage">
      <textarea
        onChange={props.onChange}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown} />
      <button onClick={() => sendMessage(value)}>{props.buttonName}</button>
    </div>
  )
}

export default SendMessage