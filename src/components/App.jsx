import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import basicNotes from "../data";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState(basicNotes);
  const addNote = (note) => {
    setNotes((prevNotesList) => [note, ...prevNotesList]);
  };
  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note) => (
        <Note key={note.id} title={note.title} content={note.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
