import * as actionTypes from "../constants/actionTypes";
import NoteService from "../services/NoteService";
import { globalAlert } from "./globalAlertActions";
import logger from "../utils/logger";
import { push } from "connected-react-router";

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

export function createNote(text) {
  return async function(dispatch) {
    dispatch({
      type: actionTypes.NOTES_ADD_NOTE,
      status: actionTypes.PROGRESS
    });

    const noteService = new NoteService();
    try {
      await noteService.createNote(text);

      dispatch(globalAlert(`Note was created.`));

      dispatch(push("/"));

      return dispatch({
        type: actionTypes.NOTES_ADD_NOTE,
        status: actionTypes.SUCCESS,
        text
      });
    } catch (err) {
      logger.warn(err);

      dispatch(globalAlert("Can not create note. Please try it again."));

      return dispatch({
        type: actionTypes.NOTES_ADD_NOTE,
        status: actionTypes.ERROR,
        message: "Can not create note. Please try it again."
      });
    }
  };
}

export function updateNote(id, text) {
  return async function(dispatch) {
    dispatch({
      type: actionTypes.NOTES_EDIT_NOTE,
      status: actionTypes.PROGRESS
    });

    const noteService = new NoteService();
    try {
      await noteService.updateNote(id, text);

      dispatch(globalAlert(`Note was updated.`));

      dispatch(push("/"));

      return dispatch({
        type: actionTypes.NOTES_EDIT_NOTE,
        status: actionTypes.SUCCESS,
        id,
        text
      });
    } catch (err) {
      logger.warn(err);

      dispatch(globalAlert("Can not update note. Please try it again."));

      return dispatch({
        type: actionTypes.NOTES_EDIT_NOTE,
        status: actionTypes.ERROR,
        message: "Can not update note. Please try it again."
      });
    }
  };
}

export function getNoteById(id) {
  return async function(dispatch) {
    dispatch({
      type: actionTypes.NOTES_VIEW_NOTE,
      status: actionTypes.PROGRESS
    });

    const noteService = new NoteService();
    try {
      let note = await noteService.getNoteById(id);

      dispatch({
        type: actionTypes.NOTES_VIEW_NOTE,
        status: actionTypes.SUCCESS,
        note,
        id
      });
    } catch (err) {
      logger.warn(err);

      dispatch({
        type: actionTypes.NOTES_VIEW_NOTE,
        status: actionTypes.ERROR,
        message: "Can not load note. Please try it again."
      });

      dispatch(globalAlert("Can not load note. Please try it again."));
    }
  };
}
