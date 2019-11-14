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
import localizedStrings from "../localizedStrings";
import { connect } from "react-redux";
import { getAllNotes } from "../actions/noteActions";

const mapStateToProps = state => {
  return {
    noteList: state.notes.noteList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllNotes: () => dispatch(getAllNotes())
  };
};

export class NoteList extends React.PureComponent {
  componentDidMount() {
    const { getAllNotes } = this.props;
    getAllNotes();
  }

  render() {
    const { noteList } = this.props;

    return (
      <React.Fragment>
        <Typography variant="h5" gutterBottom>
          {localizedStrings.noteListTitle}
        </Typography>

        <List dense={false}>
          {noteList.map(note => {
            return (
              <ListItem key={note}>
                <ListItemAvatar>
                  <Avatar>{note.id}</Avatar>
                </ListItemAvatar>
                <ListItemText primary={note.title} secondary={null} />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="detail">
                    <VisibilityIcon />
                  </IconButton>
                  <IconButton edge="end" aria-label="edit">
                    <EditIcon />
                  </IconButton>
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);
