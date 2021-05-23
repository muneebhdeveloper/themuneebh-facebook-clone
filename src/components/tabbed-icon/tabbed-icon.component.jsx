import React from "react";
import "./tabbed-icon.styles.css";

function TabbedIcon({ Icon, title, badge, active }) {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a
      href="#"
      className={`${active ? `tabbed-icon--active` : null} tabbed-icon`}
      title={title}
    >
      {badge ? <div className="tabbed-icon_badge">{badge}</div> : null}
      <Icon className="tabbed-icon_icon" />
    </a>
  );
}

export default TabbedIcon;
