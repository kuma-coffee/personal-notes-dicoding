import React from "react";

function NoteHeader({ onSearch }) {
  return (
    <nav className="note-app__header">
      <h1>Notes</h1>
      <input
        className="note-input__title"
        type="text"
        placeholder="Cari catatan ..."
        onChange={onSearch}
      />
    </nav>
  );
}

export default NoteHeader;
