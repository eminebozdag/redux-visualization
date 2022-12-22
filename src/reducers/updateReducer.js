import { UPDATE_TEXT } from "./actions/updateAction";

const defaultState = {
  text: "Default message by Parent Node",
};

export function updateReducer(state = defaultState, action) {
  switch (action.type) {
    case UPDATE_TEXT:
      return {
        ...state,
        text: action.text,
      };

    default:
      return state;
  }
}
