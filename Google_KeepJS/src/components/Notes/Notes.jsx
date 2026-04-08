import "./Notes.css";
import Note from "./Note";
import { useState } from "react";

function Notes(props) {
  const {
    notes,
    deleteNote,
    toggleModal,
    setSelectedNote,
    editNote,
    reorderNotes,
  } = props;
  const [draggedNoteIndex, setDraggedNoteIndex] = useState(null);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="notes" onDragOver={handleDragOver}>
      {notes.length === 0 && <p>Notes you add appear here.</p>}
      {notes.map((note, index) => (
        <Note
          key={index}
          note={note}
          index={index}
          deleteNote={deleteNote}
          toggleModal={toggleModal}
          setSelectedNote={setSelectedNote}
          editNote={editNote}
          draggedNoteIndex={draggedNoteIndex}
          setDraggedNoteIndex={setDraggedNoteIndex}
          reorderNotes={reorderNotes}
        />
      ))}
    </div>
  );
}

export default Notes;
