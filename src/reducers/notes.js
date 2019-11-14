import * as actionTypes from "../constants/actionTypes";

const initialState = {
  noteList: []
};

function handleLoad(state, action) {
  if (action.status === actionTypes.SUCCESS) {
    return {
      ...state,
      noteList: action.notes
    };
  } else {
    return state;
  }
}

export default function notes(state = initialState, action) {
  const { type } = action;

  switch (type) {
    case actionTypes.NOTES_LIST_LOAD:
      return handleLoad(state, action);

    default:
      return state;
  }
}
