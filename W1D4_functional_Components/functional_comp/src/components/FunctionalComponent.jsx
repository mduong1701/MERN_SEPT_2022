import React, {useState} from 'react';

const FunctionalComponent = (props) => {

    // CREATE STATE in Functional Component
    //    state
    //      |          change state
    //      V               V            default state
    const [theStateVar, setTheStateVar] = useState(10)
    const [num, setNum] = useState(100)

    // const [person, setPerson] = useState(props.person)
    const [person, setPerson] = useState({
        name: "bob",
        favFood: "🍝",
        luckyNumber: 7
      })

    // console.log(props);
    // console.log("this is", this);
    // console.log(props.person.name);

    const x = 3;

    const clickMe = () => {
        // console.log("I'm clicked!!!");
        setNum(num + 1) // async function!!!!
        // console.log(num);
        setPerson({
            ...person,
            luckyNumber: person.luckyNumber + 1
        })
    }

    return (
        <fieldset>
            <legend>FunctionalComponent.jsx</legend>g
            hi num = {num}
            <br />
            <button onClick={ () => (clickMe())}>click me</button>
            {/* {JSON.stringify(props.person)} */}

            <hr />
            <p></p>
            person = {JSON.stringify(person)}
        </fieldset>
    )
}

export default FunctionalComponent;