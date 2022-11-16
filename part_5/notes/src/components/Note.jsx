import React from 'react'

const Note = ({ note, toggleimportance }) => {
  const label = note.important
    ? 'make not important' : 'make important'

  return (
    <li className='note' >
      <span>{note.content}</span>
      <button onClick={toggleimportance} >{label}</button>
    </li>
  )
}

export default Note