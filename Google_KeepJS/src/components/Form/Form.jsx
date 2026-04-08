import React, { useState } from "react";
import { uid } from "uid";
import "./Form.css";

function Form(props) {
  const { edit, selectedNote } = props;

  const [title, setTitle] = useState((edit && selectedNote?.title) || "");
  const [text, setText] = useState((edit && selectedNote?.text) || "");
  const [isActive, setIsActive] = useState(edit);

  const titleChangeHandler = (e) => setTitle(e.target.value);

  const textChangeHandler = (e) => setText(e.target.value);

  const submitFormHandler = (e) => {
    e.preventDefault();

    const note = {
      id: uid(),
      title,
      text,
    };

    if (note.title !== "" || note.text !== "") {
      props.addNote(note);
      setText("");
      setTitle("");
    }

    setIsActive(false);
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
