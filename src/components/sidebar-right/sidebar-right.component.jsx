import React from "react";
import ListItem from "../list-item/list-item.component";
import { FaUserCircle } from "react-icons/fa";
import "./sidebar-right.styles.css";

function SidebarRight() {
  return (
    <div className="sidebar-right">
      <ListItem Icon={FaUserCircle} itemTitle="Muneeb Hussain" />
    </div>
  );
}

export default SidebarRight;
