import React from "react";
import { Provider } from "react-redux";
import App from "./App";
import { ConnectedRouter } from "connected-react-router";
import configureStore, { history } from "./store";

class AppWrapper extends React.PureComponent {
  render() {
    const store = configureStore();

    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default AppWrapper;
