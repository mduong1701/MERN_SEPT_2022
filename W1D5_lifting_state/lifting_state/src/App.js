import './App.css';
import React, {useState} from 'react'
import Display from './components/Display';
import Animal from './components/Animal';
import Form from './components/Form';
import Person from './components/Person';
import PersonForm from './components/PersonForm';

function App() {

  // create state variable for this component
  const [animals, setAnimals] = useState(["🦓", "🦁", "🐘", "🐒"])

  const [people, setPeople] = useState([
    {
      name: "Toad",
      age: 30
    },
    {
      name: "Mario",
      age: 40
    },
    {
      name: "Luigi",
      age: 40
    },
    {
      name: "Princess Peach",
      age: 30
    }
  ])


  const addAnimal = (newAnimal) => {
    console.log("hello from app.js", newAnimal);

    // 1 create a copy of state
    // const copyAnimals = [...animals]

    // copyAnimals.push(newAnimal);

    // setAnimals(copyAnimals)

    // alt way 
    setAnimals([...animals, newAnimal])
    // setAnimals([newAnimal, ...animals])

  }

  return (
    <div className="App">
      <h1>lifting state</h1>
      {/* {JSON.stringify(animals)} */}
      {/* <Display animals={animals}/> */}
      {/* <Form addAnimal={addAnimal}/> */}
      {/* {
        animals.map((el, i) => {
          return <Animal el={el} key={i}/>
        })
      } */}
      
      {/* ----- PEOPLE ---- */}
      {JSON.stringify(people)}
      <PersonForm people={people} setPeople={setPeople}/>
      {
        people.map((person, idx) => {
          return <Person key={idx} person={person} i={idx}/>
        })
      }
    </div>
  );
}

export default App;
