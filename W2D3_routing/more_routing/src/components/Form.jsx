import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Form = ({addNewHero}) => {

    const [name, setName] = useState("")
    const [powerLevel, setPowerLevel] = useState(0)
    const [image, setImage] = useState("")

    const navigate = useNavigate()

    const createHero = (e) => {
        e.preventDefault();
        const hero = {
            name,
            powerLevel,
            image
        }
        addNewHero(hero)
        navigate("/display")

    }

    return (
        <form onSubmit={createHero}>
            <div>
                {JSON.stringify(name)} : 
                {JSON.stringify(powerLevel)} : 
                {JSON.stringify(image)}
            </div>
            hero: <input onChange={(e)=> setName(e.target.value)} value={name}/> <br />
            powerLevel: <input onChange={(e) => setPowerLevel(e.target.value)} value={powerLevel}/> <br />
            image: <input  onChange={(e) => setImage(e.target.value)} value={image}/> <br />
            <button>Create hero</button>
        </form>
    )
}

export default Form