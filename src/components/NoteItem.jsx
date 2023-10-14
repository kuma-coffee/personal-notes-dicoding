import React from "react";
import NoteActionButton from "./NoteActionButton";
import NoteItemContent from "./NoteItemContent";
import { showFormattedDate } from "../utils";

function NoteItem({
  title,
  createdAt,
  body,
  id,
  archived,
  onDelete,
  onArchive,
}) {
  return (
    <div className="note-item">
      <NoteItemContent
        title={title}
        date={showFormattedDate(createdAt)}
        body={body}
      />
      <NoteActionButton
        id={id}
        archived={archived}
        onDelete={onDelete}
        onArchive={onArchive}
      />
    </div>
  );
}

export default NoteItem;
