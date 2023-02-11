import { createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
const AppReducer = (
  state = {
    pass: false,
    socket: false,
    backend: "http://localhost:8833",
    me: {
      id: 0,
      identifier: 0,
    },
  },
  action
) => {
  switch (action.type) {
    case "SET_SOCKET":
      return {
        ...state,
        socket: action.value,
      };
    case "SET_PASS":
      return {
        ...state,
        pass: action.value,
      };
    case "SET_ME":
      return {
        ...state,
        me: action.value,
      };
    default:
      return state;
  }
};
const store = createStore(AppReducer, composeWithDevTools());

export default store;
