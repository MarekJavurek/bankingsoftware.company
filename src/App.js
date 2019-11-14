import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import NoteList from "./components/NoteList";
import NoteEditor from "./components/NoteEditor";
import { Route, Switch } from "react-router";
import Loader from "./components/common/Loader";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import GlobalAlert from "./components/common/GlobalAlert";
import { FormattedMessage } from "react-intl";
import { withStyles } from "@material-ui/core/styles";

const mapStateToProps = state => {
  return {
    appLoading: state.loader.loading
  };
};

export class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null
    };
  }

  handleMenu = event => {
    this.setState({
      anchorEl: event.currentTarget
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null
    });
  };

  handleLanguageChange = lang => {
    this.props.handleLanguageChange(lang);
    this.handleClose();
  };

  render() {
    const { classes, appLoading } = this.props;
    const { anchorEl } = this.state;

    let open = Boolean(this.state.anchorEl);

    return (
      <React.Fragment>
        <Loader loading={appLoading} />
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              className={classes.title}
              onClick={() => {
                this.props.push("/");
              }}
            >
              <FormattedMessage id="appTitle" />
            </Typography>
            <Button color="inherit" onClick={this.handleMenu}>
              <FormattedMessage id="changeLanguageButton" />{" "}
              {this.props.language}
            </Button>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              open={open}
              onClose={this.handleClose}
            >
              {Object.keys(this.props.messages).map(lang => (
                <MenuItem
                  key={lang}
                  onClick={() => this.handleLanguageChange(lang)}
                >
                  {lang}
                </MenuItem>
              ))}
            </Menu>
          </Toolbar>
        </AppBar>
        <main className={classes.layout}>
          <GlobalAlert />
          <Paper className={classes.paper}>
            <React.Fragment>
              <Switch>
                <Route path="/add" render={() => <NoteEditor />} />
                <Route
                  path="/edit/:id"
                  render={({ match }) => (
                    <NoteEditor noteId={match.params.id} />
                  )}
                />
                <Route
                  path="/view/:id"
                  render={({ match }) => (
                    <NoteEditor noteId={match.params.id} readonly />
                  )}
                />
                <Route path="/" render={() => <NoteList />} />
              </Switch>
            </React.Fragment>
          </Paper>
          <Copyright />
        </main>
      </React.Fragment>
    );
  }
}

const styles = theme => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  title: {
    flexGrow: 1
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }
  },
  stepper: {
    padding: theme.spacing(3, 0, 5)
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1)
  }
});

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      Marek Javůrek (peanee@gmail.com) {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default withStyles(styles)(connect(mapStateToProps, { push })(App));
