import * as actionTypes from "../constants/actionTypes";
import NoteService from "../services/NoteService";
import { globalAlert } from "./globalAlertActions";
import logger from "../utils/logger";

export function getAllNotes() {
  return async function(dispatch) {
    dispatch({
      type: actionTypes.NOTES_LIST_LOAD,
      status: actionTypes.PROGRESS
    });

    const noteService = new NoteService();
    try {
      let notes = await noteService.getAllNotes();

      dispatch({
        type: actionTypes.NOTES_LIST_LOAD,
        status: actionTypes.SUCCESS,
        notes
      });
    } catch (err) {
      logger.warn(err);

      dispatch({
        type: actionTypes.NOTES_LIST_LOAD,
        status: actionTypes.ERROR,
        message: "Can not load notes. Please try it again."
      });

      dispatch(globalAlert("Can not load notes. Please try it again."));
    }
  };
}

export function deleteNote(id) {
  return async function(dispatch) {
    dispatch({
      type: actionTypes.NOTES_DELETE_NOTE,
      status: actionTypes.PROGRESS
    });

    const noteService = new NoteService();
    try {
      await noteService.deleteNote(id);

      dispatch({
        type: actionTypes.NOTES_DELETE_NOTE,
        status: actionTypes.SUCCESS,
        id
      });

      dispatch(globalAlert(`Note with ID: ${id} was deleted.`));
    } catch (err) {
      logger.warn(err);

      dispatch({
        type: actionTypes.NOTES_DELETE_NOTE,
        status: actionTypes.ERROR,
        message: "Can not delete note. Please try it again."
      });

      dispatch(globalAlert("Can not delete note. Please try it again."));
    }
  };
}
