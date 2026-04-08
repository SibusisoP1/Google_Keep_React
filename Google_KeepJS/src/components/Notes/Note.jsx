import React, { useState } from "react";

function Note(props) {
  const { id, title, text, color } = props.note;
  const { setSelectedNote } = props;
  const [isHovered, setIsHovered] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);

  const colors = [
    "#ffffff",
    "#f28482",
    "#f4cccc",
    "#fce5cd",
    "#f8f7a0",
    "#d9d2e9",
    "#a2c4c9",
  ];

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

  const changeColorHandler = (e, newColor) => {
    e.stopPropagation();
    props.editNote(id, { title, text, color: newColor });
    setShowColorPicker(false);
  };

  const toggleColorPicker = (e) => {
    e.stopPropagation();
    setShowColorPicker(!showColorPicker);
  };

  const handleDragStart = (e) => {
    props.setDraggedNoteIndex(props.index);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (
      props.draggedNoteIndex !== null &&
      props.draggedNoteIndex !== props.index
    ) {
      props.reorderNotes(props.draggedNoteIndex, props.index);
    }
    props.setDraggedNoteIndex(null);
  };

  const handleDragEnd = () => {
    props.setDraggedNoteIndex(null);
  };

  return (
    <div
      className="note"
      id={id}
      draggable
      onClick={noteClickHandler}
      onMouseOver={onMouseOverHandler}
      onMouseOut={onMouseOutHandler}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onDragEnd={handleDragEnd}
      style={{
        backgroundColor: color || "#ffffff",
        opacity: props.draggedNoteIndex === props.index ? 0.5 : 1,
        cursor: "grab",
      }}
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
        style={{
          visibility: isHovered || showColorPicker ? "visible" : "hidden",
        }}
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
          <span
            className="material-symbols-outlined hover small-icon"
            onClick={toggleColorPicker}
            style={{ cursor: "pointer", position: "relative" }}
          >
            palette
          </span>
          {showColorPicker && (
            <div
              style={{
                position: "absolute",
                bottom: "-150px",
                left: "-30px",
                display: "flex",
                flexWrap: "wrap",
                width: "150px",
                gap: "8px",
                backgroundColor: "white",
                padding: "10px",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                zIndex: 1000,
              }}
            >
              {colors.map((c) => (
                <div
                  key={c}
                  onClick={(e) => changeColorHandler(e, c)}
                  style={{
                    width: "24px",
                    height: "24px",
                    backgroundColor: c,
                    borderRadius: "4px",
                    cursor: "pointer",
                    border: color === c ? "3px solid #333" : "1px solid #ddd",
                  }}
                />
              ))}
            </div>
          )}
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
