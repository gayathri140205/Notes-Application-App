
import React from 'react';
import { NotesProvider } from './Context/NotesContext';
import NotesList from './Components/NotesList';
import './App.css';


function App() {
  return (
    <NotesProvider>
      <div className="App">
        <h1>Notes App</h1>
        <NotesList />
      </div>
    </NotesProvider>
  );
}

export default App;
