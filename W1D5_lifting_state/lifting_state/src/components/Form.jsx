import React, {useState} from 'react'

const Form = (props) => {
    console.log(props);
    // state var for the input
    const [input, setInput] = useState("")

    // submitting the form
    const submitHandler = (b) => {
        b.preventDefault();
        // console.log("submitted");
        props.addAnimal(input)
    }

    return (
        <fieldset>
            state input: {JSON.stringify(input)}
            <legend>Form.jsx</legend>

            <form onSubmit={submitHandler}>
                make an animal: <input onChange={(e) => {
                    setInput(e.target.value)
                }}/> 
                <button>submit</button>
            </form>

        </fieldset>
    )
}

export default Form