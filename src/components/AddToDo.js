import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../actions";

const AddToDo = () => {
  const dispatch = useDispatch();
  const [newToDoText, setNewToDoText] = useState("");

  const handleAddToDoText = (e) => {
    setNewToDoText(e.target.value);
  };

  const handleAddToDo = () => {
    dispatch(addToDo(newToDoText));
    setNewToDoText("");
  };

  return (
    <div className="add-todo-container">
      <h1 className="logo-text">
        <span className="iconify logo-icon" data-icon="mdi:todo-auto"></span>
        <span className="logo-to-text">to</span>
        <span className="logo-do-text">do</span>
      </h1>
      <div className="add-todo-input-container">
        <input
          className="add-todo-input"
          type="text"
          onChange={handleAddToDoText}
          value={newToDoText}
          placeholder="Enter todo here..."
        />
        <button
          className="add-todo-btn"
          onClick={handleAddToDo}
          disabled={!newToDoText.trim()}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default AddToDo;
