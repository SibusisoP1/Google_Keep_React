import Form from "./components/Form/Form";
import Modal from "./components/Modal/Modal";
import Navbar from "./components/Navbar/Navbar";
import Notes from "./components/Notes/Notes";
import Sidebar from "./components/Sidebar/Sidebar";
import React, { useState } from "react";

function App() {
  const [notes, setNotes] = useState([
    {
      id: "",
      title: "pop",
      text: "loll",
    },
    {
      id: "",
      title: "poz",
      text: "lo4l",
    },
  ]);

  const addNote = (note) => {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <Form addNote={addNote} />
      <Notes notes={notes} />
      <Modal />
    </>
  );
}

export default App;
