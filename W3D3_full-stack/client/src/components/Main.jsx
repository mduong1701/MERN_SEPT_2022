import React, { useState, useEffect } from 'react';
import axios from 'axios'
import noteStyle from './Main.module.css';
import { Link, useNavigate } from 'react-router-dom'

const Main = (props) => {

    const navigate = useNavigate();
    const [notes, setNotes] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/notes")
            .then(res => {
                console.log(res.data);
                setNotes(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    // go to update route
    const goToUpdate = (updateID) => {
        console.log(updateID);
        navigate("/update/" + updateID)
    }
    // DELETE
    const deleteNote = (deleteID) => {
        console.log(deleteID);

        if (window.confirm("really?")) {

            axios.delete("http://localhost:8000/api/notes/"+ deleteID)
            .then(res => {
                console.log(res.data);
                console.log("DELETE SUCCESS!");
                
                // remove from the DOM after a successful delete
                setNotes(notes.filter((note) => note._id !== deleteID))
            })
            .catch(err => console.log(err))
        }
    }

    return (
        <div>
            <h2>all da notes!</h2>
            {/* {JSON.stringify(notes)} */}

            {/* loop over all the notes */}
            {
                notes.map((oneNote, index) => {
                    return (
                        <div key={oneNote._id} className={noteStyle.note}>
                            <Link to={`/note/${oneNote._id}`}>

                                <h5> {oneNote.isImportant ? "📌" : ""} {oneNote.title}</h5>
                                <p>
                                    {oneNote.content}
                                </p>
                            </Link>
                            <button onClick={() => goToUpdate(oneNote._id)}>edit</button>
                            <button onClick={() => deleteNote(oneNote._id)}>delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Main