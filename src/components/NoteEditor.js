import React from "react";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { getNoteById, createNote, updateNote } from "../actions/noteActions";
import { FormattedMessage } from "react-intl";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { push } from "connected-react-router";
import { Formik } from "formik";
import * as Yup from "yup";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "../components/common/forms/TextField";

const mapStateToProps = state => {
  return {
    note: state.notes.note
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateNote: (id, noteText) => dispatch(updateNote(id, noteText)),
    createNote: noteText => dispatch(createNote(noteText)),
    getNoteById: id => dispatch(getNoteById(id)),
    push: to => dispatch(push(to))
  };
};

const FormSchema = Yup.object().shape({
  noteText: Yup.string().required("Required")
});

export class NoteList extends React.PureComponent {
  componentDidMount() {
    const { noteId, getNoteById } = this.props;

    if (noteId) {
      getNoteById(noteId);
    }
  }

  render() {
    const { noteId, note, readOnly, createNote, updateNote } = this.props;

    return (
      <React.Fragment>
        <Typography variant="h5" gutterBottom>
          {noteId ? (
            readOnly ? (
              <FormattedMessage id="viewNote" />
            ) : (
              <FormattedMessage id="editNote" />
            )
          ) : (
            <FormattedMessage id="addNewNote" />
          )}
        </Typography>

        <Formik
          enableReinitialize={true}
          initialValues={
            noteId && note ? { noteText: note.title } : { noteText: "" }
          }
          validationSchema={FormSchema}
          onSubmit={(values, { setSubmitting }) => {
            if (noteId) {
              updateNote(noteId, values.noteText).then(() => {
                setSubmitting(false);
              });
            } else {
              createNote(values.noteText).then(() => {
                setSubmitting(false);
              });
            }
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            isSubmitting
          }) => (
            <form onSubmit={handleSubmit} noValidate>
              <TextField
                disabled={Boolean(readOnly)}
                id="noteText"
                label="Note Text"
                required
                error={errors.noteText && touched.noteText && errors.noteText}
                value={values.noteText}
                onChange={handleChange}
              />

              {!readOnly && (
                <FormGroup>
                  <Grid container spacing={5}>
                    <Grid item xs={12}>
                      <Button
                        style={{ width: "100%" }}
                        variant="contained"
                        color="primary"
                        disabled={isSubmitting}
                        type="submit"
                      >
                        <FormattedMessage id="saveNote" />
                      </Button>
                    </Grid>
                  </Grid>
                </FormGroup>
              )}
            </form>
          )}
        </Formik>

        <Fab
          style={{ marginTop: 20 }}
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
