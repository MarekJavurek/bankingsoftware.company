import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

export class Loader extends React.PureComponent {
  render() {
    const { loading, classes } = this.props;

    return (
      <React.Fragment>
        {loading && (
          <div className={classes.preloader}>
            <CircularProgress />
          </div>
        )}
      </React.Fragment>
    );
  }
}

Loader.propTypes = {
  classes: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

const styles = theme => ({
  preloader: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    zIndex: 9999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  skWave: {
    margin: 0,
    width: "60px",
    height: "60px"
  }
});

export default withStyles(styles)(Loader);
