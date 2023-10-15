import React from "react";

function ItemBody({ title, body, createdAt }) {
  return (
    <div className="note-item__content">
      <div className=".note-item__content">
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__date">{createdAt}</p>
        <p className="contact-item__username">{body}</p>
      </div>
    </div>
  );
}

export default ItemBody;
