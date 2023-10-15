import React from "react";
import { getInitialData } from "../utils";
import NoteList from "./NoteList";
import NoteInput from "./NoteInput";
import NoteHeader from "./NoteHeader";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      search: "",
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
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

  onSearchHandler(event) {
    const searchValue = event.target.value.toLowerCase();
    console.log("Search Value:", searchValue);
    this.setState({ search: searchValue });
  }

  render() {
    const activeNotes = this.state.notes.filter((note) => {
      return (
        !note.archived &&
        (note.title.toLowerCase().includes(this.state.search) ||
          note.body.toLowerCase().includes(this.state.search))
      );
    });

    const archiveNotes = this.state.notes.filter((note) => {
      return (
        note.archived &&
        (note.title.toLowerCase().includes(this.state.search) ||
          note.body.toLowerCase().includes(this.state.search))
      );
    });

    return (
      <>
        <NoteHeader onSearch={this.onSearchHandler} />
        <section className="note-app__body">
          <div className="note-input">
            <h2>Buat Catatan</h2>
            <NoteInput addNote={this.onAddNoteHandler} />
          </div>
          <NoteList
            activeNotes={activeNotes}
            archiveNotes={archiveNotes}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
          />
        </section>
      </>
    );
  }
}

export default NoteApp;
