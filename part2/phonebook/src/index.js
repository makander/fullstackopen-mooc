import React, { useState } from 'react'
import ReactDOM from "react-dom";

const App = () => {
    
    const [persons, setPersons] = useState([{ name: 'Arto Hellas' }])
    const [newName, setNewName] = useState('');

    const newPerson = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        checkUser ? console.log('already exists') : 
        setPersons(persons.concat({ name: newName }))
        
    }


    const checkUser = persons.filter(person => person.name)

    const handleChangePerson = (e) => {
        setNewName(e.target.value) 
    }

    const showUsers = () => persons.map(person => <li key={person.name}>{person.name}</li>)

    return (<div>
        <h2>
            PhoneBook
        </h2>
        <form onSubmit={newPerson}>
            <div>
                name: <input onChange={handleChangePerson}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
            <div>debug: {newName}
            </div>
            
        </form>
        <h2>Numbers</h2>
        <ul>
        {showUsers()}
        </ul>
    </div>
    )
}
export default App;

ReactDOM.render(<App />, document.getElementById("root"));