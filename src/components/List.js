import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeToDo } from "../actions";

const List = () => {
  const dispatch = useDispatch();
  const toDoList = useSelector((state) => state.todo);
  const [completedTasks, setCompletedTasks] = useState(0);

  const handleRemoveToDo = (i) => {
    console.log(i);
    dispatch(removeToDo(i));
  };

  return (
    <div className="todo-list">
      <div className="task-statistics">
        <span className="total-tasks-title">
          Total tasks&nbsp;
          <span className="total-tasks-count">{toDoList.length}</span>
        </span>
        <span className="completed-tasks-title">
          Completed
          <span className="completed-tasks-count">
            &nbsp;{completedTasks} of {toDoList.length}
          </span>
        </span>
      </div>
      {toDoList.map((toDo, i) => {
        return (
          <div className="todo-item">
            <div>
              <input
                className="todo-checkbox"
                type="checkbox"
                checked={toDo.status !== "pending"}
              />
              <p className="todo-title">{toDo.title}</p>
            </div>
            <button
              className="remove-icon-btn"
              onClick={() => handleRemoveToDo(i)}
            >
              <span
                class="iconify remove-icon"
                data-icon="material-symbols:delete-outline-sharp"
              ></span>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default List;
