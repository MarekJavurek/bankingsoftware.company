import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

class DialogContentWrapper extends React.Component {
  render() {
    const { message, messagePrefix } = this.props;

    return (
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {_.isArray(message) ? (
            <React.Fragment>
              {_.isString(messagePrefix) && messagePrefix.length > 0 && (
                <strong style={{ display: "block" }}>{messagePrefix}</strong>
              )}
              {message.map((m, i) => (
                <span key={`msg-${i}`} style={{ display: "block" }}>
                  {m}
                </span>
              ))}
            </React.Fragment>
          ) : (
            message
          )}
        </DialogContentText>
      </DialogContent>
    );
  }
}

export class Alert extends React.Component {
  static propTypes = {
    message: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string)
    ]).isRequired,
    messagePrefix: PropTypes.string,
    onClose: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.state = {
      open: true
    };
  }

  closeDialog = () => {
    const onClose = this.props.onClose;
    if (_.isFunction(onClose)) {
      onClose();
    }

    this.setState({
      open: false
    });
  };

  render() {
    return (
      <Dialog
        open={this.state.open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-title"
        style={{ zIndex: 9999999 }}
      >
        <DialogTitle id="draggable-dialog-title">Info</DialogTitle>
        <DialogContentWrapper
          message={this.props.message}
          messagePrefix={this.props.messagePrefix}
        />
        <DialogActions>
          <Button onClick={this.closeDialog} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
