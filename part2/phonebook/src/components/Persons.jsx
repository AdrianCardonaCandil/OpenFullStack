const Person = ({name, number, deleteHandler}) => {
    return (
        <div>
            {name} {number} <button type="button" onClick={deleteHandler}> Delete {name}</button>
        </div>
    )
}

const Persons = ({persons, deleteHandler}) => {
    return (
        <div>
            <h2>Persons:</h2>
            <div>
                {persons.map(person => <Person key={person.id} name = {person.name} number={person.number} deleteHandler = {() => deleteHandler(person.name, person.id)}></Person>)}
            </div>
        </div>
    )
}

export default Persons