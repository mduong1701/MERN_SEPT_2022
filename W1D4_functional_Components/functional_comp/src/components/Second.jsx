import { useState } from 'react'

const Second = (props) => {

    // create state for this component
    const [animals, setAnimals] = useState(props.animals)

    return (
        <>
            <div>Second</div>
            <p>
                {/* {JSON.stringify(animals)} */}
            </p>
            <hr />
            {
                animals.map((animal, index) => {
                    return <li key={index}>{animal}</li>
                })
            }
        </>
    )
}

export default Second