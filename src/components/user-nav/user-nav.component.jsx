import React from "react";
import "./user-nav.styles.css";

function UserNav({ photoUrl, fullName }) {
  return (
    <div className="usernav">
      <img className="usernav_photo" src={photoUrl} alt={fullName} />
      <div className="usernav_username">{fullName}</div>
    </div>
  );
}

export default UserNav;
