import './App.css';
import ClassComponent from "./components/ClassComponent";
import FunctionalComponent from './components/FunctionalComponent';
import Second from './components/Second';

function App() {

  const person = {
    name: "bob",
    favFood: "🍝",
    luckyNumber: 7
  }

  const animals = ["🦓", "🐼", "🦁", "🐲"];

  return (
    <fieldset>
      <legend>App.js</legend>
      <div className="App">
        <h1>welcome to functional components!</h1>
        {/* <ClassComponent person={person}/> */}
        <FunctionalComponent person={person}/>
        <Second animals={animals}/>
      </div>
    </fieldset>
  );
}

export default App;
