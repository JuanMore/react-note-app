import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import About from './components/pages/About';
import AboutIconLink from './components/AboutIconLink';
import {NoteProvider} from './context/NoteContext'

function App() {  
  
  return (
    <NoteProvider>
    <Router>
      <>
      <Header text={true} />
        
        <div className="container-1">
            <Routes>
            <Route exact path='/' element={
              <>
                <NoteForm />
                <NoteList />
                </>
          }>
          </Route>


          <Route path='/about' element={<About />}/>
          </Routes>

          <AboutIconLink />
        </div>
        
      </>
      </Router>
      </NoteProvider>
  );
}

export default App;
