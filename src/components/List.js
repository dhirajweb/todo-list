import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeToDo, markAsComplete } from "../actions";

const List = () => {
  const dispatch = useDispatch();
  const toDoList = useSelector((state) => state.todo);
  const [completedTasks, setCompletedTasks] = useState(0);

  const handleRemoveToDo = (i) => {
    console.log(i);
    dispatch(removeToDo(i));
  };

  const handleMarkAsComplete = (e, i) => {
    if (e.target.checked) {
      dispatch(markAsComplete("check", i));
    } else {
      dispatch(markAsComplete("uncheck", i));
    }
  };

  useEffect(() => {
    let completedCount = 0;
    for (let i = 0; i < toDoList.length; i++) {
      if (toDoList[i].status === "complete") {
        completedCount += 1;
      }
    }
    setCompletedTasks(completedCount);
  }, [toDoList]);

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
          <div className="todo-item" key={`list-item-${i}`}>
            {/* <div> */}
            <input
              className="todo-checkbox"
              type="checkbox"
              checked={toDo.status !== "pending"}
              onChange={(e) => handleMarkAsComplete(e, i)}
            />
            <p
              className={`todo-title ${
                toDo.status === "complete" ? "completed-task" : ""
              }`}
            >
              {toDo.title}
            </p>
            {/* </div> */}
            <button
              className="remove-icon-btn"
              onClick={() => handleRemoveToDo(i)}
            >
              <span
                className="iconify remove-icon"
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
