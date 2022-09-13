import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Create = (props) => {

    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [isImportant, setIsImportant] = useState(false)

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
                console.log(res.data);
                navigate("/notes")
            })
            .catch(err => console.log(err))
    }


    return (
        <div>

            {JSON.stringify(title)} <br />
            {JSON.stringify(content)} <br />
            {JSON.stringify(isImportant)}<br />

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