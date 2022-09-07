import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';

const Hero = (props) => {

    const [hero, setHero] = useState(null)

    // navigate
    const navigate = useNavigate()

    // grab the url variable
    const { heroId } = useParams();
    // console.log(useParams());
    console.log(heroId);

    // execute when the component has finished loading
    useEffect(() => {
        axios.get(`https://akabab.github.io/superhero-api/api/id/${heroId}.json`)
            .then(res => {
                console.log(res.data);
                setHero(res.data)
            })
            .catch(err => {
                console.log("❌❌❌❌❌", err)
                navigate("/error", {replace: true})
            })
    }, [heroId])

    // goback
    const goBack = () => {
        navigate(-1);
    }

    return (
        // <div>{JSON.stringify(hero)}</div>
        <div>
            {
                hero ? (
                    <>
                        <h3>{hero.name}</h3>
                        <img src={hero.images.md} alt={hero.name} height="200" />
                        <button onClick={goBack}>back</button>
                    </>
                ) : <>loading...</>
            }
        </div>
    )
}

export default Hero