import React from "react";

function NoteActionButton({ id, archived, onDelete, onArchive }) {
  if (!archived) {
    return (
      <div className="note-item__action">
        <button
          className="note-item__delete-button"
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
        <button
          className="note-item__archive-button"
          onClick={() => onArchive(id)}
        >
          Arsipkan
        </button>
      </div>
    );
  } else {
    return (
      <div className="note-item__action">
        <button
          className="note-item__delete-button"
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
        <button
          className="note-item__archive-button"
          onClick={() => onArchive(id)}
        >
          Pindahkan
        </button>
      </div>
    );
  }
}

export default NoteActionButton;
