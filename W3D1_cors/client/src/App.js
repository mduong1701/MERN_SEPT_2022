import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {

  const [ninjas, setNinjas] = useState([]);
  const [name, setName] = useState("bob");
  const [belt, setBelt] = useState(0);
  const [isGrad, setIsGrad] = useState(false) 

  useEffect(() => {
    axios.get("http://localhost:8000/api/ninjas")
      .then(someDataResponse => {
        console.log(someDataResponse.data);
        setNinjas(someDataResponse.data)
      })
      .catch(err => console.log("❌❌", err))
  }, [])

  const makeNinja = (e) => {
    e.preventDefault()
    console.log(name, belt, isGrad);
    const newNinja = {
      name,
      numberOfBelts: belt,
      isGraduating: isGrad
    }

    axios.post("http://localhost:8000/api/ninjas", newNinja)
      .then(newObjCreated => console.log("✅", newObjCreated))
      .catch(err => console.log("❌❌", err))
  }

  return (
    <div className="App">
      <h1>NINJAS</h1>
      {/* state vars */}
      <div>
        {JSON.stringify(name)} <br />
        {JSON.stringify(belt)} <br />
        {JSON.stringify(isGrad)} <br />
      </div>

      <form onSubmit={makeNinja}>
        name: <input onChange={(e) => setName(e.target.value)} value={name}/> <br />
        belts: <input onChange={(e) => setBelt(e.target.value)} type="number" value={belt}/> <br />
        grad?: <input type="checkbox" onChange={(e) => setIsGrad(e.target.checked)} checked={isGrad}/> <br />
        <button>create</button>
      </form>
      
      <p></p>
      <div>
        {/* {JSON.stringify(ninjas)} */}
        {
          ninjas.map((ninja) => {
            return <div key={ninja._id}>
              name: {ninja.name} <br />
              numberOfBelts: {ninja.numberOfBelts} <br />
              isGraduating 🎓: {ninja.isGraduating ? "✅" : "❌"}
              <hr />
            </div>
          })
        }
      </div>
    </div>
  );
}

export default App;
