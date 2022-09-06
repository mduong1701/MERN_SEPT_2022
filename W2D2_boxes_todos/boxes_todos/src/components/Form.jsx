import React, { useState } from 'react'

const Form = (props) => {

    const [boxColor, setBoxColor] = useState("")

    const submitColor = (e) => {
        e.preventDefault();
        const boxToCreate =    {
            color: boxColor,
            status: false
          }
        props.addBox(boxToCreate)
    }

    return (
        <fieldset>
            <legend>Form.jsx</legend>
            boxColor: {JSON.stringify(boxColor)}

            <form onSubmit={submitColor}>
                color: <input type="color" onChange={(e) => setBoxColor(e.target.value)} value={boxColor} />
                <button>ADD</button>
            </form>
        </fieldset>
    )
}

export default Form