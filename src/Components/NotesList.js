
import React, { useContext, useState } from 'react';
import NotesContext from '../Context/NotesContext';
import NoteItem from './NoteItem';
import NoteForm from './NoteForm';

const NotesList = () => {
  const { notes } = useContext(NotesContext);
  const [selectedNote, setSelectedNote] = useState(null);

  return (
    <div>
      <NoteForm selectedNote={selectedNote} setSelectedNote={setSelectedNote} />
      <ul>
        {notes.map(note => (
          <NoteItem key={note.id} note={note} setSelectedNote={setSelectedNote} />
        ))}
      </ul>
    </div>
  );
};

export default NotesList;
