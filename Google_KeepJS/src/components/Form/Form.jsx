import React, { useState } from "react";
import { uid } from "uid";
import "./Form.css";

function Form(props) {
  const { addNote, edit, selectedNote, toggleModal, editNote } = props;

  const [title, setTitle] = useState((edit && selectedNote.title) || "");
  const [text, setText] = useState((edit && selectedNote.text) || "");
  const [color, setColor] = useState((edit && selectedNote.color) || "#ffffff");
  const [isActive, setIsActive] = useState(edit);
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

  const titleChangeHandler = (e) => setTitle(e.target.value);

  const textChangeHandler = (e) => setText(e.target.value);

  const submitFormHandler = (e) => {
    e.preventDefault();

    if (!edit) {
      const note = {
        id: uid(),
        title,
        text,
        color,
      };

      if (note.title !== "" || note.text !== "") {
        addNote(note);
      }

      setIsActive(false);
    } else {
      toggleModal();
      editNote(selectedNote.id, { title, text, color });
    }

    setText("");
    setTitle("");
    setColor("#ffffff");
    setShowColorPicker(false);
  };

  const formClickHandler = () => {
    setIsActive(true);
  };

  return (
    <div>
      <div className="form-container active-form" onClick={formClickHandler}>
        <form
          onSubmit={submitFormHandler}
          className={isActive ? "form" : ""}
          id="form"
        >
          {isActive && (
            <input
              type="text"
              className="note-title"
              placeholder="Title"
              onChange={titleChangeHandler}
              value={title}
            />
          )}

          <input
            type="text"
            className="note-text"
            placeholder="Take a note..."
            onChange={textChangeHandler}
            value={text}
          />
          {isActive ? (
            <div className="form-actions">
              <div className="icons">
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
                    onClick={() => setShowColorPicker(!showColorPicker)}
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
                          onClick={() => {
                            setColor(c);
                            setShowColorPicker(false);
                          }}
                          style={{
                            width: "24px",
                            height: "24px",
                            backgroundColor: c,
                            borderRadius: "4px",
                            cursor: "pointer",
                            border:
                              color === c ? "3px solid #333" : "1px solid #ddd",
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
                <div className="tooltip">
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
                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icon">
                    undo
                  </span>
                  <span className="tooltip-text">Undo</span>
                </div>
                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icon">
                    redo
                  </span>
                  <span className="tooltip-text">Redo</span>
                </div>
              </div>
              <button className="close-btn">close</button>
            </div>
          ) : (
            <div className="form-actions">
              <div className="tooltip">
                <span className="material-symbols-outlined hover">
                  check_box
                </span>
                <span className="tooltip-text">New List</span>
              </div>
              <div className="tooltip">
                <span className="material-symbols-outlined hover">brush</span>
                <span className="tooltip-text">New Drawing</span>
              </div>
              <div className="tooltip">
                <span className="material-symbols-outlined hover">image</span>
                <span className="tooltip-text">New Image</span>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Form;

{
  /* <div
          className="form-container inactive-form"
          onClick={formClickHandler}
        >
          <form>
            <input
              type="text"
              className="note-text"
              placeholder="Take a note..."
            />
            <div className="form-actions">
              <div className="tooltip">
                <span className="material-symbols-outlined hover">
                  check_box
                </span>
                <span className="tooltip-text">New List</span>
              </div>
              <div className="tooltip">
                <span className="material-symbols-outlined hover">brush</span>
                <span className="tooltip-text">New Drawing</span>
              </div>
              <div className="tooltip">
                <span className="material-symbols-outlined hover">image</span>
                <span className="tooltip-text">New Image</span>
              </div>
            </div>
          </form>
        </div> */
}
