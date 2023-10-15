import React from "react";

function Button({ id, onDelete, onArchive, onUnarchive, onDeleteArchived }) {
  return (
    <div className="note-item__action">
      {onDelete && (
        <button
          className="note-item__delete-button"
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
      )}
      {onArchive && (
        <button
          className="note-item__archive-button"
          onClick={() => onArchive(id)}
        >
          Archive
        </button>
      )}
      {onUnarchive && (
        <button
          className="note-item__archive-button"
          onClick={() => onUnarchive(id)}
        >
          Unarchive
        </button>
      )}
      {onDeleteArchived && (
        <button
          className="note-item__delete-button"
          onClick={() => onDeleteArchived(id)}
        >
          Delete
        </button>
      )}
    </div>
  );
}

export default Button;
