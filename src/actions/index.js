const addToDo = (text) => {
  return {
    type: "ADD",
    payload: { title: text, status: "pending" },
  };
};

const removeToDo = (index) => {
  return {
    type: "REMOVE",
    payload: index,
  };
};

const markAsComplete = (action, index) => {
  return {
    type: "MARK_COMPLETE",
    payload: { action, index },
  };
};

export { addToDo, removeToDo, markAsComplete };
