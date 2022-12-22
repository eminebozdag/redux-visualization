import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { updateReducer } from "../reducers/updateReducer";

export const store = createStore(
  updateReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
