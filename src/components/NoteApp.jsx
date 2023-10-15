import React from "react";
import { getInitialData } from "../utils";
import NoteList from "./NoteList";
import NoteInput from "./NoteInput";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
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

  onAddNoteHandler({ title, body }) {
    this.setState((previousState) => {
      return {
        notes: [
          ...previousState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: Date.now(),
            archived: false,
          },
        ],
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
      <>
        <section className="note-app__body">
          <div className="note-input">
            <h2>Buat Catatan</h2>
            <NoteInput addNote={this.onAddNoteHandler} />
          </div>
        </section>
        <NoteList
          activeNotes={activeNotes}
          archiveNotes={archiveNotes}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
        />
      </>
    );
  }
}

export default NoteApp;
