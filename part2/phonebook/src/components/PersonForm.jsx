const PersonForm = ({nameProps, numberProps, handler}) => {
    return (
        <form onSubmit={handler}>
            <h2>Add new entry:</h2>
            <div>
                <p>name: <input value={nameProps.value} onChange={nameProps.handler}></input></p>
                <p>number: <input value={numberProps.value} onChange={numberProps.handler}></input></p>
            </div>
            <button type="submit">Add Entry</button>
        </form>
    )
}

export default PersonForm