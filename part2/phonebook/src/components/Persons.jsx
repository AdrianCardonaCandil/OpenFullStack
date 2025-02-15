const Person = ({name, number}) => {
    return <p>{name} {number}</p>
}

const Persons = ({persons}) => {
    return (
        <div>
            <h2>Persons:</h2>
            <div>
                {persons.map(person => <Person key={person.name} name = {person.name} number={person.number}></Person>)}
            </div>
        </div>
    )
}

export default Persons