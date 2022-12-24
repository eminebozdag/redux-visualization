import { UPDATE_MESSAGE } from "./actions/messageAction";

const defaultState = {
  text: "Default message by Parent Node",
};

export function messageReducer(state = defaultState, action) {
  switch (action.type) {
    case UPDATE_MESSAGE:
      return {
        ...state,
        text: action.text,
      };

    default:
      return state;
  }
}
