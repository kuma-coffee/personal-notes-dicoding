import React from "react";
import NoteItem from "./NoteItem";

function NoteListContent({ notes, onDelete, onArchive }) {
  if (notes.length === 0) {
    return (
      <div className="notes-list__empty-message">
        <h3>Tidak ada catatan</h3>
      </div>
    );
  } else {
    return (
      <div className="notes-list">
        {notes.map((note) => (
          <NoteItem
            key={note.id}
            id={note.id}
            onDelete={onDelete}
            onArchive={onArchive}
            {...note}
          />
        ))}
      </div>
    );
  }
}

export default NoteListContent;
