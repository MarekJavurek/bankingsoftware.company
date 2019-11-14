import * as actionTypes from "../constants/actionTypes";

export function closeGlobalAlert() {
  return function(dispatch) {
    dispatch({
      type: actionTypes.GLOBAL_ALERT_CLOSE,
      status: actionTypes.SUCCESS
    });
  };
}

export function globalAlert(message) {
  return function(dispatch) {
    dispatch({
      type: actionTypes.GLOBAL_ALERT_OPEN,
      status: actionTypes.SUCCESS,
      message
    });
  };
}
