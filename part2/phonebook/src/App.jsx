import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  // Stored persons data
  const [persons, setPersons] = useState([])

  // Fetching initial data from json-server using axios library and effect-hooks.
  useEffect(()=>{
    axios.get('http://localhost:3001/persons').then(response => setPersons(response.data))
  }, [])

  // State for name, number and filter inputs
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  // Event handlers for name, number and filter inputs
  const handleInputName = (event) => setNewName(event.target.value)
  const handleInputNumber = (event) => setNewNumber(event.target.value)
  const handleFilterInput = (event) => setNewFilter(event.target.value)

  // Event handler for form submission
  const handleFormSubmit = (event) => {
    event.preventDefault()
    if (!newName || !newNumber) {
      alert('Please, enter name and phone to continue')
      return
    }
    if (persons.findIndex(item => item.name === newName) == -1) {
      setPersons(persons.concat([{name: newName, number: newNumber}]))
      setNewName('')
      setNewNumber('')
    } else {
      alert(`${newName} is already added to phonebook`)
    }
  }

  // Filter persons to show
  const personsToShow = newFilter === '' ? 
    persons : persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter 
        value = {newFilter} 
        handler = {handleFilterInput}>
      </Filter>
      <PersonForm 
        nameProps={{value: newName, handler: handleInputName}}
        numberProps={{value: newNumber, handler: handleInputNumber}}
        handler={handleFormSubmit}>
      </PersonForm>
      <Persons persons={personsToShow}></Persons>
    </div>
  )
}

export default App
