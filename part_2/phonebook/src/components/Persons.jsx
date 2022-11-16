import React from "react";

const Persons = ({ personShow , removePerson}) => {
	return <div>
    {
    personShow.map(person => 
    <div key={person.name} >
      {person.name}: {person.number}
      <button onClick={() => removePerson(person.id,person.name)}>
        delete
      </button>
      </div>)
    }
  </div>
}

export default Persons