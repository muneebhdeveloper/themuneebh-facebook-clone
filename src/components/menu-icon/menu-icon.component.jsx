import React from "react";
import "./menu-icon.styles.css";

function MenuIcon({ Icon, rounded }) {
  return (
    <div className={rounded && "icon-rounded"}>
      <Icon />
    </div>
  );
}

export default MenuIcon;
