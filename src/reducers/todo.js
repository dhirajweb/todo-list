const initialState = [];

const todo = (state = initialState, action) => {
  console.log("inside reducer", action);
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
      const filtered = state.filter((val, i) => {
        return i !== action.payload;
      });
      console.log(filtered, "filtered");
      return filtered;
    default:
      return state;
  }
};

export default todo;
