import './App.css';
import AnotherComponent from './components/AnotherComponent';

function App() {

  const x = 3;
  const person = {
    name: "John",
    age: 37,
    favFood: "🍕"
  }
  const animals = ["tiger", "elephant", "zebra"];


  return (
    <fieldset>
      <legend>App.js</legend>
      <div className="App">
        <h1>Hello ninjas!!!</h1>
        <p>
          x = {JSON.stringify(person)} <br />
        </p>
        <ul>
          {
            animals.map((el, idx) => {
              return <li key={idx}>{el}</li>
            })
          }
        </ul>

        <AnotherComponent person={person} x={10}/>

      </div>
    </fieldset>
  );
}

export default App;
