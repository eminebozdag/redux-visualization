import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { messageReducer } from "../reducers/messageReducer";

export const store = createStore(
  messageReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
