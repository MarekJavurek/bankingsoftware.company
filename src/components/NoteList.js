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

export default function NoteList() {
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        {localizedStrings.noteListTitle}
      </Typography>

      <List dense={false}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>AV</Avatar>
          </ListItemAvatar>
          <ListItemText primary="Single-line item" secondary={null} />
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
      </List>
    </React.Fragment>
  );
}
