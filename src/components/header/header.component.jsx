import React from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import CustomInput from "../custom-input/custom-input.component";
import { FaSearch, FaHome } from "react-icons/fa";
import { MdOndemandVideo } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi";
import { IoGameController } from "react-icons/io5";
import "./header.styles.css";
import TabbedIcon from "../tabbed-icon/tabbed-icon.component";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <Logo className="logo" />
        <CustomInput
          type="text"
          name="search"
          Icon={FaSearch}
          placeholder="Search Facebook"
        />
      </div>
      <div className="header_center">
        <TabbedIcon Icon={FaHome} title="Home" active />
        <TabbedIcon Icon={MdOndemandVideo} title="Watch" />
        <TabbedIcon Icon={HiOutlineUserGroup} title="Groups" badge={3} />
        <TabbedIcon Icon={IoGameController} title="Gaming" />
      </div>
      <div className="header_right">Right Side Bar</div>
    </div>
  );
}

export default Header;
