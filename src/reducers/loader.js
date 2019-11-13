import { PROGRESS, SUCCESS, ERROR } from "../constants/actionTypes";

const initialState = {
  loading: true,
  inProgressCounter: 0
};

export default function loader(state = initialState, action) {
  if (action.status === PROGRESS) {
    return Object.assign({}, state, {
      loading: true,
      inProgressCounter: state.inProgressCounter + 1
    });
  } else if (action.status === SUCCESS || action.status === ERROR) {
    const inProgressCounter = state.inProgressCounter - 1;
    if (inProgressCounter <= 0) {
      return Object.assign({}, state, {
        loading: false,
        inProgressCounter: 0
      });
    } else {
      return Object.assign({}, state, {
        inProgressCounter
      });
    }
  } else {
    return state;
  }
}
