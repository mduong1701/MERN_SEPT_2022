import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [superheroes, setSuperHeroes] = useState([])

  useEffect(() => {
    axiosHeroes()
    // axios.get("https://akabab.github.io/superhero-api/api/all.json")
    // .then( res => {
    //   // AXIOS WRAPS THE RESPONSE INSIDE A `DATA` KEY
    //   console.log(res.data);
    //   setSuperHeroes(res.data);
    // })
    // .catch(err => {
    //   console.log("❌❌❌❌", err);
    // })
  }, [])

  // Vanilla JS to fetch from an API
  const fetchHeroes = () => {
    fetch("https://akabab.github.io/superhero-api/api/all.json")
      .then(someRes => {
        return someRes.json()
      })
      .then(apiData => {
        console.log(apiData)
        setSuperHeroes(apiData);
      })
      .catch(someErr => console.log(someErr))
  }

  // AXIOS fetch
  const axiosHeroes = () => {

    axios.get("https://akabab.github.io/superhero-api/api/all.json")
      .then(res => {
        // AXIOS WRAPS THE RESPONSE INSIDE A `DATA` KEY
        console.log(res.data);
        setSuperHeroes(res.data);
      })
      .catch(err => {
        console.log("❌❌❌❌", err);
      })
  }
  // DO NOT DO THIS - USE useEffect
  // axiosHeroes()


  return (
    <div className="App">
      <h1>SuperHeroes API 🦸‍♀️🦸‍♂️</h1>
      <button onClick={fetchHeroes}>fetch Superheroes</button> |
      <button onClick={axiosHeroes}>axios Superheroes</button>
      <hr />
      {/* {JSON.stringify(superheroes)} */}
      <br />


      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Hero Name</th>
            <th>Full name</th>
            <th>Publisher</th>
          </tr>
        </thead>
        <tbody>
          {

            superheroes.length > 1 ? (
              superheroes.map((hero, i) => {
                return (
                  <tr key={hero.id}>
                    <td><img src={hero.images.md} alt="" width="80px" /></td>
                    <td>{hero.name}</td>
                    <td>{hero.biography.fullName ? hero.biography.fullName : "UNKNOWN"}</td>
                    <td>{hero.biography.publisher}</td>
                  </tr>
                )
              })
            ) : "loading"


          }


        </tbody>
      </table>
    </div>
  );
}

export default App;
