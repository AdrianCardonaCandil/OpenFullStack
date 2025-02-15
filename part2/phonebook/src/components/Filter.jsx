const Filter = ({value, handler}) => {
    return (
        <div>
            <h2>Filter By Name:</h2>
            <input value = {value} onChange={handler}></input>
        </div>
    )
}

export default Filter