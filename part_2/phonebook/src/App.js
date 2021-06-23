import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonsForm from './components/PersonsForm'
import Persons from './components/Persons'
import axios from 'axios'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [newName, setNewName ] = useState('')
  const [newNumber, setNewNumber ] = useState('')
  const [findPerson, setfindPerson ] = useState('')
  const handleChengeName = (event) => setNewName(event.target.value);
  const handleChengeNumber = (event) => setNewNumber(event.target.value);
  const handlChengeeFilter = (event) => setfindPerson(event.target.value);
  const addPerson = (event) => {
    event.preventDefault()
    const find = persons.findIndex(person => person.name.toUpperCase() === newName.toUpperCase())
    if  (find >= 0) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
      }
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
    }
  }
 const personShow = !findPerson
  ? persons
  : persons.filter(person => person.name.toUpperCase().includes(findPerson.toUpperCase()))

  useEffect(() => {
    axios
    .get('http://localhost:3001/persons')
    .then(response => setPersons(response.data))
  },[])

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter handlChengeeFilter={handlChengeeFilter} value={findPerson}/>
      <h2>add a new</h2>
      <PersonsForm 
        handleChengeName={handleChengeName}
        handleChengeNumber={handleChengeNumber}
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
      />
      <h2>Numbers</h2>
      <Persons personShow={personShow}/>
    </div>
  )
}

export default App