import './App.css';
import { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Form from './components/Form';
import Display from "./components/Display"
import GrabUrlVar from "./components/GrabUrlVar"

function App() {

  const [heroes, setHeroes] = useState([{
    name: "Bob",
    powerLevel: 9001,
    image: "https://www.biography.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTI1NDg4NTg2MDAxODA1Mjgy/bob-ross-promojpg.jpg"
  }])

  // add new hero
  const addNewHero = (heroObj) => {
    console.log(heroObj);
    setHeroes([...heroes, heroObj])
  }

  // const allComponents = <div>
  //   <Form />
  // </div>

  return (
    <div className="App">

      <Link to={"/"}>Home</Link> &nbsp;&nbsp;&nbsp;&nbsp;
      <Link to={"/form"}>Form</Link> &nbsp;&nbsp;&nbsp;&nbsp;
      <Link to={"/display"}>Display</Link> &nbsp;&nbsp;&nbsp;&nbsp;



      <Routes>

        <Route path='/form' element={<Form addNewHero={addNewHero} />} />
        <Route path='/display' element={<Display heroes={heroes} />} />
        <Route path='/display/:varname' element={<GrabUrlVar />} />

      </Routes>
    


    </div>
  );
}

export default App;
