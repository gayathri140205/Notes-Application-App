
import React, { useContext } from 'react';
import NotesContext from '../Context/NotesContext';

const NoteItem = ({ note, setSelectedNote }) => {
  const { dispatch } = useContext(NotesContext);

  return (
    <li>
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <button onClick={() => setSelectedNote(note)}>Edit</button>
      <button onClick={() => dispatch({ type: 'DELETE_NOTE', payload: { id: note.id } })}>Delete</button>
    </li>
  );
};

export default NoteItem;
