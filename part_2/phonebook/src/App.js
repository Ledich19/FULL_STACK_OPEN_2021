import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonsForm from './components/PersonsForm'
import Persons from './components/Persons'
import personsServices from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [newName, setNewName ] = useState('')
  const [newNumber, setNewNumber ] = useState('')
  const [findPerson, setfindPerson ] = useState('')
  const [infoMessage,setInfoMessage] = useState(null)
  const [isError,setIsError] = useState(false)
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
          setInfoMessage(`replaced number ${newName}`)
          setTimeout(() => setInfoMessage(null),2000)
        }).catch(error => {
          setInfoMessage(`Information of ${newName} has already been removed from server`)
          setIsError(true)
          setPersons(persons.filter(p => p.name !== newName))
          setTimeout(() => {
            setInfoMessage(null)
            setIsError(false)
          },5000)
        }
          
        )

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
        setInfoMessage(`Added ${newName}`)
        setTimeout(() => setInfoMessage(null),2000)
      })
      .catch(error => {
        console.log(error.response.data.error)
        setInfoMessage(error.response.data.error)
        setIsError(true)
        setTimeout(() => {
          setInfoMessage(null)
          setIsError(false)
        },5000)
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
      <Notification message={infoMessage} isError={isError}/>
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