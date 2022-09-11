import React from 'react'

const Display = (props) => {
    return (
        <>
            <fieldset>
                <legend>Display.jsx</legend>
            {/* {JSON.stringify(props.animals)} */}
            {
                props.animals.map((animal, idx) => {
                    return (
                        <div key={idx}>
                            <li>{animal}</li>
                        </div>
                    )
                })
            }
            </fieldset>
        </>
    )
}

export default Display