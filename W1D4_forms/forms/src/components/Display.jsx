import React from 'react'

const Display = (props) => {
    console.log(props.newUser);

    // const { username, email, password } = props.newUser;

    return (
        <fieldset>
            <legend>Display.jsx</legend>
            {
                props.newUser ? (
                    <p>
                        name: {props.newUser.username} <br />
                        email: {props.newUser.email} <br />
                        pass: {props.newUser.password}
                    </p>
                ) : <p>nothing yet</p>
            }

        </fieldset>
    )
}

export default Display