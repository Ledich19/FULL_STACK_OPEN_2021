import React from 'react'

const Note = ({note, toggleimportance}) => {
  const label = note.important
  ? 'make not important' : 'make importanr'
  
    return(
      <li>
        {note.content}
        <button onClick={toggleimportance} >{label}</button>
      </li>
    )
  }
  
export default Note