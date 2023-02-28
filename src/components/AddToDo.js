import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../actions";

const AddToDo = () => {
  const dispatch = useDispatch();
  const [newToDoText, setNewToDoText] = useState("");

  const handleAddToDoText = (e) => {
    setNewToDoText(e.target.value);
  };

  const handleAddToDo = (e) => {
    e.preventDefault();
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
      <form className="add-todo-input-container" onSubmit={handleAddToDo}>
        <input
          className="add-todo-input"
          type="text"
          onChange={handleAddToDoText}
          value={newToDoText}
          placeholder="Enter todo here..."
        />
        <button
          type="submit"
          className="add-todo-btn"
          disabled={!newToDoText.trim()}
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default AddToDo;
