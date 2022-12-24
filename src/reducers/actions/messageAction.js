const UPDATE_MESSAGE = "UPDATE_MESSAGE";

const updateMessage = (text) => ({
  type: UPDATE_MESSAGE,
  text,
});

export { updateMessage, UPDATE_MESSAGE };
