import * as actionTypes from "../constants/actionTypes";

const initialState = {
  noteList: [],
  note: null
};

function handleNotesListLoad(state, action) {
  if (action.status === actionTypes.SUCCESS) {
    return {
      ...state,
      noteList: action.notes
    };
  } else {
    return state;
  }
}

function handleLoadNote(state, action) {
  if (action.status === actionTypes.SUCCESS) {
    return {
      ...state,
      note: action.note
    };
  } else {
    return state;
  }
}

export default function notes(state = initialState, action) {
  const { type } = action;

  switch (type) {
    case actionTypes.NOTES_LIST_LOAD:
      return handleNotesListLoad(state, action);

    case actionTypes.NOTES_VIEW_NOTE:
      return handleLoadNote(state, action);

    default:
      return state;
  }
}
