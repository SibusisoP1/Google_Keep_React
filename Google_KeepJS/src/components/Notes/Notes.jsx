import "./Notes.css";
import Note from "./Note";

function Notes(props) {
  const { notes } = props;

  return (
    <div className="notes">
      {notes.length === 0 && <p>Notes you add appear here.</p>}
      {notes.map((note, index) => (
        <Note key={index} id={note.id} title={note.title} text={note.text} />
      ))}
    </div>
  );
}

export default Notes;
