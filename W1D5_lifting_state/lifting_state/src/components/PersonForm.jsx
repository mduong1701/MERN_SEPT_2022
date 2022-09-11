import React, {useState} from 'react'

const PersonForm = (props) => {
    // console.log(props);
    // state var for the input
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);

    // submitting the form
    const submitHandler = (b) => {
        b.preventDefault();
        // console.log("submitted");
        
        const newPerson = {
            name,
            age
        }

        console.log(newPerson);

        props.setPeople([...props.people, newPerson])

    }

    return (
        <fieldset>
            state name: {JSON.stringify(name)} : 
            state age: {JSON.stringify(age)}
            <legend>Form.jsx</legend>

            <form onSubmit={submitHandler}>
                name: <input onChange={(e) => {
                    setName(e.target.value)
                }}/> <br />
                age: <input type="number" onChange={(e) => setAge(e.target.value)} /> 
                <button>submit</button>
            </form>

        </fieldset>
    )
}

export default PersonForm