import React from "react";
import FullItem from "./fullItem";

function ListItem({
  contacts,
  onDelete,
  onArchive,
  onUnarchive,
  onDeleteArchived,
}) {
  return (
    <div className="notes-list">
      {contacts.map((contact) => (
        <FullItem
          key={contact.id}
          id={contact.id}
          onDelete={onDelete}
          onArchive={onArchive}
          onUnarchive={onUnarchive}
          onDeleteArchived={onDeleteArchived}
          {...contact}
        />
      ))}
    </div>
  );
}

export default ListItem;
