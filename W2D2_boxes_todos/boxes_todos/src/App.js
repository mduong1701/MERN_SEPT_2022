import './App.css';
import { useState } from 'react';
import Display from './components/Display';
import Form from './components/Form';

function App() {

  // main state variable (array)
  const [boxes, setBoxes] = useState([
    {
      color: "red",
      status: false
    },
    {
      color: "green",
      status: true
    },
    {
      color: "blue",
      status: true
    }
  ])

  // CREATE BOX
  const addBox = (boxColor) => {
    console.log("hello from addBox app.js", boxColor);

    // 1. create copy of state
    const copy = [...boxes];
    // 2. alter the copy (which is mutable)
    copy.push(boxColor);
    console.log(copy);
    // 3. overwrite the previous state
    setBoxes(copy)

    // setBoxes([...boxes,boxColor ])
  }

  // UPDATE
  const updateBox = (e, i) => {
    // console.log("update", i);

    const copy = [...boxes];
    // if (copy[i].status === true) {
    //   copy[i].status = false
    // } else {
    //   copy[i].status = true
    // }
    // console.log(copy);
    // setBoxes(copy)
    copy[i].status = !copy[i].status;
    setBoxes(copy);
  }

  // DELETE
  const deleteBox = (e, i) => {
    console.log("delete", i);
      const filteredBoxes = boxes.filter((b, boxIndex) => {
        if (i === boxIndex) {
          return false
        } else {
          return true
        }
        // return i !== boxIndex
      })
      console.log(filteredBoxes);
      setBoxes(filteredBoxes)
    
  }

  return (
    <div className="App">
      <h1>Boxes and ToDos 📦📃</h1>
      {JSON.stringify(boxes)}
      <hr />
      <Form addBox={addBox} />
      <Display 
        boxes={boxes} 
        updateBox={updateBox}
        deleteBox={deleteBox} />
    </div>
  );
}

export default App;
