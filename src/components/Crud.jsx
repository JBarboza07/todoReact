import { useState } from 'react';
import Swal from 'sweetalert2';
import'../styles/Crud.css'
import Routing from '../routes/Routing';
function Crud() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [editingNoteId, setEditingNoteId] = useState(null);
  const [editingText, setEditingText] = useState('');

  // Contar notas completadas
  const completedNotesCount = notes.filter(note => note.completed).length;

  // Agregar nota
  const addNote = () => {
    if (newNote.trim() === '') return;
    const newNoteObj = { id: Date.now(), text: newNote, completed: false };
    setNotes([...notes, newNoteObj]);
    setNewNote('');
  };

  // Eliminar nota
  const deleteNote = (id) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        setNotes(notes.filter(note => note.id !== id));
        Swal.fire('Eliminado', 'La nota ha sido eliminada.', 'success');
      }
    });
  };

  // Editar nota
  const startEditing = (id, text) => {
    setEditingNoteId(id);
    setEditingText(text);
  };

  const saveEdit = () => {
    if (editingText.trim() === '') return;
    setNotes(notes.map(note =>
      note.id === editingNoteId ? { ...note, text: editingText } : note
    ));
    setEditingNoteId(null);
    setEditingText('');
  };

  // Marcar nota como completada
  const toggleCompletion = (id) => {
    const updatedNotes = notes.map(note =>
      note.id === id ? { ...note, completed: !note.completed } : note
    );
    setNotes(updatedNotes);
  };

  return (
    <div className="notepad-container">
      <h1>Block de Notas</h1>

      {/* Mostrar notas completadas */}
      <div className="completed-counter">
        <h3>Notas completadas: {completedNotesCount}</h3>
      </div>

      {/* Campo para agregar una nueva nota */}
      <div className="input-container">
        <input
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Escribe una nueva nota..."
        />
        <button onClick={addNote}>Agregar Nota</button>
      </div>

      {/* Lista de notas */}
      <ul>
        {notes.map(note => (
          <li key={note.id} className={note.completed ? 'completed' : ''}>
            {editingNoteId === note.id ? (
              <div>
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                />
                <button onClick={saveEdit}>Guardar</button>
                <button onClick={() => setEditingNoteId(null)}>Cancelar</button>
              </div>
            ) : (
              <div>
                <span className={note.completed ? 'completed-text' : ''}>
                  {note.text}
                </span>
                <div>
                  <button className="edit" onClick={() => startEditing(note.id, note.text)}>Editar</button>
                  <button className="delete" onClick={() => deleteNote(note.id)}>Eliminar</button>
                  <button onClick={() => toggleCompletion(note.id)}>
                    {note.completed ? 'Desmarcar' : 'Marcar como completado'}
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Crud;
