import React, { useState } from "react";

function Note(props) {
  const { id, title, text } = props.note;
  const { setSelectedNote } = props;
  const [isHovered, setIsHovered] = useState(false);

  const noteClickHandler = () => {
    setSelectedNote(props.note);
    props.toggleModal();
  };

  const onMouseOverHandler = () => {
    setIsHovered(true);
  };

  const onMouseOutHandler = () => {
    setIsHovered(false);
  };

  const deleteNoteHandler = (e) => {
    e.stopPropagation();
    props.deleteNote(id);
  };

  return (
    <div
      className="note"
      id={id}
      onClick={noteClickHandler}
      onMouseOver={onMouseOverHandler}
      onMouseOut={onMouseOutHandler}
    >
      {isHovered && (
        <span className="material-symbols-outlined check-circle">
          <i className="bi bi-check-circle-fill"></i>
        </span>
      )}
      <div className="title">{title}</div>
      <div className="text">{text}</div>

      <div
        className="note-footer"
        style={{ visibility: isHovered ? "visible" : "hidden" }}
      >
        <div className="tooltip">
          <span className="material-symbols-outlined hover small-icon">
            add_alert
          </span>
          <span className="tooltip-text">Remind me</span>
        </div>
        <div className="tooltip">
          <span className="material-symbols-outlined hover small-icon">
            person_add
          </span>
          <span className="tooltip-text">Collaborator</span>
        </div>
        <div className="tooltip">
          <span className="material-symbols-outlined hover small-icon">
            palette
          </span>
          <span className="tooltip-text">Change Color</span>
        </div>
        <div className="tooltip">
          <span className="material-symbols-outlined hover small-icon">
            image
          </span>
          <span className="tooltip-text">Add Image</span>
        </div>
        <div className="tooltip archive" onClick={deleteNoteHandler}>
          <span className="material-symbols-outlined hover small-icon">
            archive
          </span>
          <span className="tooltip-text">Archive</span>
        </div>
        <div className="tooltip">
          <span className="material-symbols-outlined hover small-icon">
            more_vert
          </span>
          <span className="tooltip-text">More</span>
        </div>
      </div>
    </div>
  );
}

export default Note;
