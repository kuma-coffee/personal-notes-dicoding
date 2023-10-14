import React from "react";
import { getInitialData } from "../utils";
import NoteList from "./NoteList";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchiveHandler(id) {
    this.setState((previousState) => {
      const updateNotes = previousState.notes.map((note) => {
        if (note.id === id) {
          if (!note.archived) {
            return { ...note, archived: true };
          } else {
            return { ...note, archived: false };
          }
        }

        return note;
      });

      return {
        notes: updateNotes,
      };
    });
  }

  render() {
    const activeNotes = this.state.notes.filter(
      (note) => note.archived === false
    );
    const archiveNotes = this.state.notes.filter(
      (note) => note.archived === true
    );
    return (
      <NoteList
        activeNotes={activeNotes}
        archiveNotes={archiveNotes}
        onDelete={this.onDeleteHandler}
        onArchive={this.onArchiveHandler}
      />
    );
  }
}

export default NoteApp;
