import React, { useState } from 'react'
import Display from './Display';

const Form = (props) => {

    // this component's state variables
    const [username, setUsername] = useState("");
    const [nameErr, setNameErr] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [newUser, setNewUser] = useState(null)

    const checkName = (e) => {
        // console.log("change", e.target.value);
        setUsername(e.target.value);
        if (e.target.value.length < 2) {
            // console.log("less than 2")
            setNameErr(true)
        } else {
            console.log("ok")
            setNameErr(false)
       }
    }

    // function to submit
    const createUser = (e) => {
        e.preventDefault();
        console.log("submitted");
        // create the user:
        const newUserForm = {
            username,
            email,
            password
        }

        console.log(newUserForm);
        setNewUser(newUserForm)
    }

    return (
        <fieldset>
            <legend>Form/jsx</legend>
            <div>
                state variables : <br />
                username: {JSON.stringify(username)} <br />
                email: {JSON.stringify(email)} <br />
                password: {JSON.stringify(password)} <br />

            </div>
            <form onSubmit={createUser}>
                <div>
                    <label>Username: </label>
                    <input onChange={(e) => checkName(e)} />
                    {nameErr ? <p style={{color: "red"}}>must be more than 2</p> : <p></p>}
                </div>
                <div>
                    <label>Email Address: </label>
                    <input onChange={(e) => setEmail(e.target.value)} /> <br />
                </div>
                <div>
                    <label>Password: </label>
                    <input onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button>submit</button>
            </form>
            {/* user: {JSON.stringify(newUser)} */}
            <hr />
            <Display newUser={newUser}/>
        </fieldset>
    )
}

export default Form