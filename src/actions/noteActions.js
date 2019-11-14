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
