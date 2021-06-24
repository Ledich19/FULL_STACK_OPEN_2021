import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonsForm from './components/PersonsForm'
import Persons from './components/Persons'
import personsServices from './services/persons'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [newName, setNewName ] = useState('')
  const [newNumber, setNewNumber ] = useState('')
  const [findPerson, setfindPerson ] = useState('')
  const handleChengeName = (event) => setNewName(event.target.value);
  const handleChengeNumber = (event) => setNewNumber(event.target.value);
  const handlChengeeFilter = (event) => setfindPerson(event.target.value);
  useEffect(() => {
    personsServices
    .getAll()
    .then(allPerson => setPersons(allPerson))
  },[])
  
  const addPerson = (event) => {
    event.preventDefault()
    const find = persons.findIndex(person => person.name.toUpperCase() === newName.toUpperCase())
    
    if  (find >= 0) {
      const confirm = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one`)
      if (confirm) {
        const person = persons.find(p => p.name.toUpperCase() === newName.toUpperCase())
        const newPerson = {...person, number: newNumber}
        personsServices
        .update(person.id,newPerson)
        .then(returnPerson => {
          setPersons(persons.map(p => p.name!==newName ? p : returnPerson))
          setNewName('')
          setNewNumber('')
        })

      }
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
      }
      personsServices
      .postPerson(newPerson)
      .then(newPerson=> {
        setPersons(persons.concat(newPerson))
        setNewName('')
        setNewNumber('')
      })
    }
  }

  const removePerson = (id,name) => {
    const confirm = window.confirm(`Delete ${name} ?`)
    if (confirm) {
      personsServices
      .deletePerson(id)
      .then(setPersons(persons.filter(n => n.id !== id) ))
    }
  }

 const personShow = !findPerson
  ? persons
  : persons.filter(person => person.name.toUpperCase().includes(findPerson.toUpperCase()))


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
      <Persons personShow={personShow} removePerson={removePerson}/>
    </div>
  )
}

export default App