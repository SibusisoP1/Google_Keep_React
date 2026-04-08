import Form from "./components/Form/Form";
import Modal from "./components/Modal/Modal";
import Navbar from "./components/Navbar/Navbar";
import Notes from "./components/Notes/Notes";
import Sidebar from "./components/Sidebar/Sidebar";
import React, { useState } from "react";

function App() {
  const [notes, setNotes] = useState([
    // {
    //   id: "12345",
    //   title: "Number 1",
    //   text: "loll",
    // },
    // {
    //   id: "67890",
    //   title: "Number 2",
    //   text: "lo4l",
    // },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState({});

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

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <Form addNote={addNote} />
      <Notes
        notes={notes}
        deleteNote={deleteNote}
        toggleModal={toggleModal}
        setSelectedNote={setSelectedNote}
      />
      {isModalOpen && (
        <Modal
          isModalOpen={isModalOpen}
          notes={notes}
          selectedNote={selectedNote}
        />
      )}
    </>
  );
}

export default App;
