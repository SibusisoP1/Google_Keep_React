import Form from "./components/Form/Form";
import Modal from "./components/Modal/Modal";
import Navbar from "./components/Navbar/Navbar";
import Notes from "./components/Notes/Notes";
import Sidebar from "./components/Sidebar/Sidebar";
import React, { useState, useEffect } from "react";

function App() {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("notes");
    return saved ? JSON.parse(saved) : [];
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState({});
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const addNote = (note) => {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => id !== note.id);
    });
  };

  const editNote = (id, { title, text, color }) => {
    setNotes((prevNotes) => {
      return prevNotes.map((note) => {
        if (note.id === id) {
          return { ...note, title, text, color };
        }
        return note;
      });
    });
  };

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const reorderNotes = (draggedIndex, targetIndex) => {
    const newNotes = [...notes];
    const [draggedNote] = newNotes.splice(draggedIndex, 1);
    newNotes.splice(targetIndex, 0, draggedNote);
    setNotes(newNotes);
  };

  return (
    <>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Sidebar />
      <Form addNote={addNote} />
      <Notes
        notes={notes}
        deleteNote={deleteNote}
        toggleModal={toggleModal}
        setSelectedNote={setSelectedNote}
        editNote={editNote}
        reorderNotes={reorderNotes}
      />
      {isModalOpen && (
        <Modal
          isModalOpen={isModalOpen}
          notes={notes}
          selectedNote={selectedNote}
          toggleModal={toggleModal}
          editNote={editNote}
        />
      )}
    </>
  );
}

export default App;
