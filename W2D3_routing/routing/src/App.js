import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Other from './components/Other';
import Hero from './components/Hero';
import ErrorPage from './components/ErrorPage';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <h1>routing</h1>
      {/* <a href="/">home</a> <br /> */}
      <Link to={"/"}>react home</Link>   |
      <Link to={"/other"}>OTHER</Link>   |

      <hr />



      <Routes>

        <Route path='/form' element={<Form/>} />

        <Route path="*"  element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
              <ErrorPage/>
            </main>
          }
        />

        <Route path='/error' element={<ErrorPage/>} />

        <Route path='/hero/:heroId' element={<Hero />} />

        <Route path='/other' element={
          <>
            <h1>other stuff!!!</h1>
            <Other />
            <Home />
          </>
        } />

        <Route path='/' element={<Home />} />

      </Routes>
    </div>
  );
}

export default App;
