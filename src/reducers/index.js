import { combineReducers } from "redux";
import loader from "./loader";
import globalAlert from "./globalAlert";
import { connectRouter } from "connected-react-router";

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    loader,
    globalAlert
  });
export default createRootReducer;
