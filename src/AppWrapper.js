import React from "react";
import { Provider } from "react-redux";
import App from "./App";
import { ConnectedRouter } from "connected-react-router";
import configureStore, { history } from "./store";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
// intl
import { IntlProvider } from "react-intl";
import messages_cs from "./translations/cs.json";
import messages_en from "./translations/en.json";

class AppWrapper extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      language: "en"
    };
  }

  handleLanguageChange = lang => {
    this.setState({
      language: lang
    });
  };

  render() {
    const store = configureStore();

    const messages = {
      en: messages_en,
      cs: messages_cs
    };

    const { language } = this.state;

    return (
      <IntlProvider
        key={language}
        locale={language}
        messages={messages[language]}
      >
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <CssBaseline />
            <ThemeProvider theme={theme}>
              <App
                messages={messages}
                language={language}
                handleLanguageChange={this.handleLanguageChange}
              />
            </ThemeProvider>
          </ConnectedRouter>
        </Provider>
      </IntlProvider>
    );
  }
}

export default AppWrapper;
