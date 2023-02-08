import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [currNote, setCurrNote] = useState({
    title: "",
    content: "",
  });
  const [isClicked, setIsClicked] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCurrNote((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const areaSelected = (params) => {
    setIsClicked(true);
  };

  return (
    <div onClick={areaSelected}>
      <form
        className="create-note"
        onSubmit={(e) => {
          props.onAdd(currNote);
          setCurrNote({
            title: "",
            content: "",
          });
          e.preventDefault();
        }}
      >
        {isClicked && (
          <input
            name="title"
            placeholder="Title"
            value={currNote.title}
            onChange={handleChange}
          />
        )}
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={isClicked ? "5" : "1"}
          value={currNote.content}
          onChange={handleChange}
        />
        <Zoom in={true}>
          <Fab>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
