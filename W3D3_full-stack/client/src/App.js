import './App.css';
import {Link, Routes, Route, Navigate} from 'react-router-dom';
import Main from './components/Main';
import Create from './components/Create';
import ViewOne from './components/ViewOne';
import Update from './components/Update';

function App() {
  return (
    <div className="App">
      <h1>Notes 📝</h1>
      <Link to="/notes">Home</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/new">create</Link> 
      <hr />

      {/* THEATER STATE - routes */}
      <Routes>
        {/* MAIN - all NOTES */}
        <Route path='/notes' element={<Main/>} />

        {/* CREATE */}
        <Route path="/new" element={<Create/>} />

        {/* VIEW ONE */}
        <Route path='/note/:id' element={<ViewOne/>} />

        {/* UPDATE */}
        <Route path='/update/:id' element={<Update/>} />

        {/* REDIRECT */}
        <Route path="*" element={<Navigate to="/notes" replace />} />

      </Routes>
    </div>
  );
}

export default App;
