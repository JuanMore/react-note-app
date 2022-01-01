import {v4 as uuidv4} from 'uuid'
import { useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import NoteData from './data/NotesData';
import Header from './components/Header';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import About from './components/pages/About';
import AboutIconLink from './components/AboutIconLink';

function App() {
  const [note, setNote] = useState(NoteData)
  const addNote = (newNote) => {
    newNote.id = uuidv4()
    setNote([newNote ,...note])
    console.log('App', newNote)
  }
  const deleteNote = (id) => {
    // display message to user
    if (window.confirm('Are you sure you want to delete?')) {
      // setNote to new array minus the note being deleted
      // item id !== to the id that is being passed in
    setNote(note.filter( item => item.id !== id))
    }
  }
  return (
    <Router>
      <>
      <Header text={true} />
        
        <div className="container-1">
            <Routes>
            <Route exact path='/' element={
              <>
                <NoteForm handleAdd={addNote} />
                <NoteList note={note} destroyNote={deleteNote} />
                </>
          }>
          </Route>


          <Route path='/about' element={<About />}/>
          </Routes>

          <AboutIconLink />
        </div>
        
      </>
      </Router>
  );
}

export default App;
