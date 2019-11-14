import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import loader from "./loader";
import globalAlert from "./globalAlert";
import notes from "./notes";

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    loader,
    globalAlert,
    notes
  });
export default createRootReducer;
