import React from "react";
import "./list-item.styles.css";

function ListItem({ photoUrl, Icon, itemTitle }) {
  return (
    <div className="list-item">
      {photoUrl && (
        <div className="list-item_img-container">
          <img className="list-item_img" src={photoUrl} alt={itemTitle} />
        </div>
      )}
      {Icon && (
        <div className="list-item_icon">
          <Icon />
        </div>
      )}
      <div className="list-item_title">{itemTitle}</div>
    </div>
  );
}

export default ListItem;
