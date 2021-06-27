import React from "react";
import "./tabbed-icon.styles.css";

function TabbedIcon({ Icon, title, badge, active, onIconActive }) {
  const activeItem = active;

  return (
    <button
      className={`${
        activeItem === title ? `tabbed-icon--active` : ""
      } tabbed-icon`}
      title={title}
      onClick={onIconActive}
    >
      {badge ? <div className="tabbed-icon_badge">{badge}</div> : null}
      <Icon className="tabbed-icon_icon" />
    </button>
  );
}

export default TabbedIcon;
