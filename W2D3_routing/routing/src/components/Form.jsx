import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Form = (props) => {

    const [heroNum, setHeroNum] = useState(1)

    const nav = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(heroNum);
        nav("/hero/" + heroNum)
    }

  return (
    <form onSubmit={submitHandler}>
        <input 
            type="number" 
            min="1" 
            onChange={(e) => setHeroNum(e.target.value)} 
            value={heroNum} 
        />
        <button>submit</button>
    </form>
  )
}

export default Form