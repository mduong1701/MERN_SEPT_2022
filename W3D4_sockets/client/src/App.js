import './App.css';
import io from 'socket.io-client'
import {useEffect, useState} from 'react'

function App() {

  // use socket from io
  const [socket] = useState(()=> io(":8000"))
  const [input, setInput] = useState("")

  const [messages, setMessages] = useState([])

  useEffect(()=> {
    // console.log("hello useEffect");

    // listen from the server
    socket.on("post chat", msg => {
      console.log("message back from server", msg);
      // setMessages([...messages, msg])
      setMessages( (previousMessage) => [msg, ...previousMessage]
      )
    })

    return () => socket.disconnect(true)
  }, [socket])

  // input change
  const onChangeHandler = e => setInput(e.target.value);

  // form submit
  const submitHandler = e => {
    e.preventDefault();

    socket.emit("yo chat", input)
    setInput("");
  }

  return (
    <div className="App">
      <h1>hello socket.io</h1>
      <form onSubmit={submitHandler}>
        <input onChange={onChangeHandler} value={input} autoComplete="off"/>
        <button>submit</button>
      </form>
      <hr />
      {
        messages.map((item, i) => {
          return (
            // <h4 key={i}>{item}</h4>
            <img width="200" src={item} alt="le pic" />
          )
        })
      }
    </div>
  );
}

export default App;
