import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import NoteList from "./components/NoteList";
import NoteEditor from "./components/NoteEditor";
import { Route, Switch } from "react-router";
import Loader from "./components/common/Loader";
import { useSelector } from "react-redux";
import localizedStrings from "./localizedStrings";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      Marek Javůrek (peanee@gmail.com) {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
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
}));

export default function App() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = lang => {
    localizedStrings.setLanguage(lang);
    handleClose();
  };

  return (
    <React.Fragment>
      <Loader loading={useSelector(state => state.loader.loading)} />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {localizedStrings.appTitle}
          </Typography>
          <Button color="inherit" onClick={handleMenu}>
            {localizedStrings.changeLanguageButton}{" "}
            {localizedStrings.getLanguage()}
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
            onClose={handleClose}
          >
            {localizedStrings.getAvailableLanguages().map(lang => (
              <MenuItem onClick={() => handleLanguageChange(lang)}>
                {lang}
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            {localizedStrings.appTitle}
          </Typography>

          <React.Fragment>
            <Switch>
              <Route exact path="/" render={() => <NoteList />} />
              <Route path="/add" render={() => <NoteEditor />} />
            </Switch>
          </React.Fragment>
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  );
}
