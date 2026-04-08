import "./Sidebar.css";
import React, { useState } from "react";

function Sidebar() {
  const [isHovered, setIsHovered] = useState(false);

  const onMouseOverHandler = () => {
    setIsHovered(true);
  };

  const onMouseOutHandler = () => {
    setIsHovered(false);
  };

  // Hide sidebar on mobile devices
  if (window.innerWidth < 768) {
    return null;
  }

  return (
    <div
      className="sidebar"
      onMouseOver={onMouseOverHandler}
      onMouseOut={onMouseOutHandler}
      style={{ width: isHovered ? "250px" : "80px" }}
    >
      <div className="sidebar-item active-item">
        <span className="material-symbols-outlined hover active">
          lightbulb
        </span>
        <span className="sidebar-text">Notes</span>
      </div>
      <div className="sidebar-item">
        <span className="material-symbols-outlined hover"> notifications </span>
        <span className="sidebar-text">Reminders</span>
      </div>
      <div className="sidebar-item">
        <span className="material-symbols-outlined hover"> edit </span>
        <span className="sidebar-text">Edit Labels</span>
      </div>
      <div className="sidebar-item">
        <span className="material-symbols-outlined hover"> archive </span>
        <span className="sidebar-text">Archive</span>
      </div>
      <div className="sidebar-item">
        <span className="material-symbols-outlined hover"> delete </span>
        <span className="sidebar-text">Trash</span>
      </div>
    </div>
  );
}

export default Sidebar;
