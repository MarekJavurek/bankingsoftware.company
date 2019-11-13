import React from "react";
import { Provider } from "react-redux";
import App from "./App";
import { ConnectedRouter } from "connected-react-router";
import configureStore, { history } from "./store";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

class AppWrapper extends React.PureComponent {
  render() {
    const store = configureStore();

    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <CssBaseline />
          <ThemeProvider theme={theme} />
          <App />
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default AppWrapper;
