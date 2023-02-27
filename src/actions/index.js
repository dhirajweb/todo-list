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

export { addToDo, removeToDo };
