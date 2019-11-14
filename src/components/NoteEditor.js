import React from "react";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { getNoteById } from "../actions/noteActions";
import { FormattedMessage } from "react-intl";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { push } from "connected-react-router";

const mapStateToProps = state => {
  return {
    noteList: state.notes.noteList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getNoteById: id => dispatch(getNoteById(id)),
    push: to => dispatch(push(to))
  };
};

export class NoteList extends React.PureComponent {
  componentDidMount() {
    const { noteId, getNoteById } = this.props;

    debugger;

    if (noteId) {
      getNoteById(noteId);
    }
  }

  render() {
    const { noteId } = this.props;

    return (
      <React.Fragment>
        <Typography variant="h5" gutterBottom>
          {noteId ? (
            <FormattedMessage id="editNote" />
          ) : (
            <FormattedMessage id="addNewNote" />
          )}
        </Typography>

        <Fab
          variant="extended"
          aria-label="like"
          onClick={() => {
            this.props.push("/");
          }}
        >
          <AddIcon />
          <FormattedMessage id="noteListTitle" />
        </Fab>
      </React.Fragment>
    );
  }
}

const ConnectedNoteList = connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteList);

export default ConnectedNoteList;
