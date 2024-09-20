
import React, { useState, useContext, useEffect } from 'react';
import NotesContext from '../Context/NotesContext';

const NoteForm = ({ selectedNote, setSelectedNote }) => {
  const { dispatch } = useContext(NotesContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (selectedNote) {
      setTitle(selectedNote.title);
      setContent(selectedNote.content);
    }
  }, [selectedNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedNote) {
      dispatch({ type: 'EDIT_NOTE', payload: { id: selectedNote.id, title, content } });
      setSelectedNote(null);
    } else {
      dispatch({ type: 'ADD_NOTE', payload: { title, content } });
    }
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        required
      ></textarea>
      <button type="submit">{selectedNote ? 'Update Note' : 'Add Note'}</button>
    </form>
  );
};

export default NoteForm;
