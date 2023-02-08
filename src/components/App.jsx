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

  const deleteNote = (id) => {
    setNotes((prevNotesList) =>
      prevNotesList.filter((note, index) => {
        return index !== id;
      })
    );
  };
  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note
          key={note.id}
          title={note.title}
          content={note.content}
          id={index}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
