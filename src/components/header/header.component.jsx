import React, { useState, useEffect } from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import CustomInput from "../custom-input/custom-input.component";
import {
  FaSearch,
  FaHome,
  FaUserCircle,
  FaFacebookMessenger,
  FaBell,
} from "react-icons/fa";
import { MdOndemandVideo } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi";
import { IoGameController } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";
import TabbedIcon from "../tabbed-icon/tabbed-icon.component";
import ListItem from "../list-item/list-item.component";
import MenuIcon from "../menu-icon/menu-icon.component";
import "./header.styles.css";

const headerTabsInitial = [
  {
    id: 1,
    title: "Home",
    icon: FaHome,
    badge: null,
  },
  {
    id: 2,
    title: "Watch",
    icon: MdOndemandVideo,
    badge: null,
  },
  {
    id: 3,
    title: "Groups",
    icon: HiOutlineUserGroup,
    badge: 3,
  },
  {
    id: 4,
    title: "Gaming",
    icon: IoGameController,
    badge: null,
  },
];

function Header() {
  let [headerTabs, setHeaderTabs] = useState([]);
  let [activeTab, setActiveTab] = useState(headerTabsInitial[0].title);

  useEffect(() => {
    setHeaderTabs(headerTabsInitial);
  }, []);

  function handleIconActive(item) {
    setActiveTab(item);
  }

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
        {headerTabs &&
          headerTabs.map((tab) => {
            return (
              <TabbedIcon
                key={tab.id}
                title={tab.title}
                Icon={tab.icon}
                badge={tab.badge}
                onIconActive={() => handleIconActive(tab.title)}
                active={activeTab}
              />
            );
          })}
      </div>
      <div className="header_right">
        <ListItem Icon={FaUserCircle} itemTitle="Muneeb Hussain" />
        <MenuIcon Icon={CgMenuGridR} rounded />
        <MenuIcon Icon={FaFacebookMessenger} rounded />
        <MenuIcon Icon={FaBell} rounded />
        <MenuIcon Icon={IoMdArrowDropdown} rounded />
      </div>
    </div>
  );
}

export default Header;
