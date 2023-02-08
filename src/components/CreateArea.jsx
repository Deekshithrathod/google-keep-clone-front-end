import React, { useState } from "react";

function CreateArea(props) {
  const [currNote, setCurrNote] = useState({
    title: "",
    content: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCurrNote((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          props.onAdd(currNote);
          setCurrNote({
            title: "",
            content: "",
          });
          e.preventDefault();
        }}
      >
        <input
          name="title"
          placeholder="Title"
          value={currNote.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={currNote.content}
          onChange={handleChange}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
