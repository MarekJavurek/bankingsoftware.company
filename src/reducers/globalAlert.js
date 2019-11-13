import {
  GLOBAL_ALERT_CLOSE,
  GLOBAL_ALERT_OPEN,
  SUCCESS
} from "../constants/actionTypes";

const initialState = {
  message: ""
};

function handleOpen(state, action) {
  if (action.status === SUCCESS) {
    let newMessage = state.message;

    if (Array.isArray(state.message)) {
      newMessage = [...state.message, action.message];
    } else if (typeof state.message === "string" && state.message !== "") {
      newMessage = [state.message, action.message];
    } else {
      newMessage = action.message;
    }

    return {
      ...state,
      message: newMessage
    };
  } else {
    return state;
  }
}

function handleClose(state, action) {
  if (action.status === SUCCESS) {
    return {
      ...state,
      ...initialState
    };
  } else {
    return state;
  }
}

export default function globalAlert(state = initialState, action) {
  const { type } = action;

  switch (type) {
    case GLOBAL_ALERT_OPEN:
      return handleOpen(state, action);

    case GLOBAL_ALERT_CLOSE:
      return handleClose(state, action);

    default:
      return state;
  }
}
