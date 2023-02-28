const initialState = [];

const todo = (state = initialState, action) => {
  let copy = [...state];
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          title: action.payload.title,
          status: action.payload.status,
        },
      ];
    case "REMOVE":
      copy = copy.filter((val, i) => {
        return i !== action.payload;
      });
      return copy;
    case "MARK_COMPLETE":
      if (action.payload.action === "check") {
        copy[action.payload.index].status = "complete";
      } else {
        copy[action.payload.index].status = "pending";
      }
      return copy;
    default:
      return state;
  }
};

export default todo;
