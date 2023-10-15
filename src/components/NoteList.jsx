import React from "react";
import NoteListContent from "./NoteListContent";

function NoteList({ activeNotes, archiveNotes, onDelete, onArchive }) {
  return (
    <>
      <section>
        <h2>Catatan Aktif</h2>
        <NoteListContent
          notes={activeNotes}
          onDelete={onDelete}
          onArchive={onArchive}
        />
      </section>
      <section>
        <h2>Arsip</h2>
        <NoteListContent
          notes={archiveNotes}
          onDelete={onDelete}
          onArchive={onArchive}
        />
      </section>
    </>
  );
}

export default NoteList;
