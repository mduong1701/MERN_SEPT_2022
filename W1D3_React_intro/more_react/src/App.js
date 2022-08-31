import './App.css';
import ClassComponent from './components/ClassComponent';
import SubComponent from './components/SubComponent';
function App() {

  const person = {
    name: "Bob",
    age: 45,
    favFood: "🍝"
  }

  return (
    <div className="App">
      <h1>more state</h1>
      <ClassComponent num={10} person={person}/>
      <SubComponent/>
    </div>
  );
}

export default App;
