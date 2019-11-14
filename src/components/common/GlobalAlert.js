import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { Alert } from "./Alerts";
import { closeGlobalAlert } from "../../actions/globalAlertActions";
import _ from "lodash";

const mapStateToProps = state => {
  return {
    message: state.globalAlert.message
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeGlobalAlert: () => dispatch(closeGlobalAlert())
  };
};

export class GlobalAlert extends React.PureComponent {
  render() {
    const { message, closeGlobalAlert } = this.props;

    return (
      <React.Fragment>
        {(_.isString(message) || Array.isArray(message)) &&
          message.length > 0 && (
            <Alert message={message} onClose={closeGlobalAlert} />
          )}
      </React.Fragment>
    );
  }
}

const styles = theme => ({});

const ConnectedGlobalAlert = connect(
  mapStateToProps,
  mapDispatchToProps
)(GlobalAlert);

export default withStyles(styles)(ConnectedGlobalAlert);
