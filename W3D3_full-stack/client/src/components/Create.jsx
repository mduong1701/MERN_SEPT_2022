import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Create = (props) => {

    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [isImportant, setIsImportant] = useState(false)
    // DATABASE ERRORS
    const [errors, setErrors] = useState([]);


    const createNote = (e) => {
        e.preventDefault();
        // const newNote = {
        //     title: title,
        //     content,
        //     isImportant
        // }
        axios.post("http://localhost:8000/api/notes", {
            title, content, isImportant
        })
            .then(res => {
                console.log("✅ SUCCESS");
                console.log(res.data);
                navigate("/notes")

            })
            .catch(err => {
                // TODO: when errors come form server!
                console.log("❌ ERROR");
                console.log(err.response.data)
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }


    return (
        <div>

            {JSON.stringify(title)} <br />
            {JSON.stringify(content)} <br />
            {JSON.stringify(isImportant)}<br />
            <hr />
            {JSON.stringify(errors)} 
            <hr />
            {errors.map((err, index) => <p style={{color: "red"}} key={index}>{err}</p>)}

            <form onSubmit={createNote}>
                title: <input onChange={e => setTitle(e.target.value)} value={title} /> <br />
                content: <input onChange={e => setContent(e.target.value)} value={content} /> <br />
                isImportant: <input onChange={e => setIsImportant(e.target.checked)} type="checkbox" checked={isImportant} /> <br />
                <button>submit</button>
            </form>
        </div>
    )
}

export default Create