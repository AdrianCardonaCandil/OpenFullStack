import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  // Stored persons data
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  
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
