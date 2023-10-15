import React from "react";

import ItemBody from "./ItemBody";
import Button from "./Button";

function FullItem({
  createdAt,
  title,
  body,
  onDelete,
  id,
  onArchive,
  onUnarchive,
  onDeleteArchived,
}) {
  return (
    <div className="note-item">
      <ItemBody title={title} body={body} createdAt={createdAt} />
      <Button
        id={id}
        onDelete={onDelete}
        onArchive={onArchive}
        onUnarchive={onUnarchive}
        onDeleteArchived={onDeleteArchived}
      />
    </div>
  );
}

export default FullItem;
