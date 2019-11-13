import React from "react";
import ReactDOM from "react-dom";
import AppWrapper from "./AppWrapper";
import globalAlertReducer from "./reducers/globalAlert";
import * as types from "./constants/actionTypes";

describe("globalAlert reducer", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AppWrapper />, div);
  });

  it("should return the initial state", () => {
    expect(globalAlertReducer(undefined, {})).toEqual({
      message: ""
    });
  });

  it("should handle GLOBAL_ALERT_OPEN - first message", () => {
    expect(
      globalAlertReducer(undefined, {
        type: types.GLOBAL_ALERT_OPEN,
        status: types.SUCCESS,
        message: "important message for user"
      })
    ).toEqual({
      message: "important message for user"
    });
  });

  it("should handle GLOBAL_ALERT_OPEN - with previous message", () => {
    expect(
      globalAlertReducer(
        {
          message: "previous message"
        },
        {
          type: types.GLOBAL_ALERT_OPEN,
          status: types.SUCCESS,
          message: "important message for user"
        }
      )
    ).toEqual({
      message: ["previous message", "important message for user"]
    });
  });
});
