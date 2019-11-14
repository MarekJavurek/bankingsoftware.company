import React from "react";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { connect } from "react-redux";
import { getAllNotes, deleteNote } from "../actions/noteActions";
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
    getAllNotes: () => dispatch(getAllNotes()),
    deleteNote: id => dispatch(deleteNote(id)),
    push: to => dispatch(push(to))
  };
};

export class NoteList extends React.PureComponent {
  componentDidMount() {
    const { getAllNotes } = this.props;
    getAllNotes();
  }

  displayNote = id => {
    this.props.push(`/view/${id}`);
  };

  editNote = id => {
    this.props.push(`/edit/${id}`);
  };

  deleteNote = id => {
    this.props.deleteNote(id);
  };

  render() {
    const { noteList } = this.props;

    return (
      <React.Fragment>
        <Typography variant="h5" gutterBottom>
          <FormattedMessage id="noteListTitle" />
        </Typography>

        <List dense={false}>
          {noteList.map(note => {
            return (
              <ListItem key={note.id}>
                <ListItemAvatar>
                  <Avatar>{note.id}</Avatar>
                </ListItemAvatar>
                <ListItemText primary={note.title} secondary={null} />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="detail"
                    onClick={() => this.displayNote(note.id)}
                  >
                    <VisibilityIcon />
                  </IconButton>
                  <IconButton
                    edge="end"
                    aria-label="edit"
                    onClick={() => this.editNote(note.id)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => this.deleteNote(note.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>
        <Fab
          variant="extended"
          aria-label="like"
          onClick={() => {
            this.props.push("/add");
          }}
        >
          <AddIcon />
          <FormattedMessage id="addNewNote" />
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
