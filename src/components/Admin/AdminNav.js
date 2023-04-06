import React from "react";
import { Link } from "react-router-dom";

const AdminNav = () => {
  return (
    <div className="adminForm">
      <Link to="/Notification">
        <button className="otherBtn"> Post Notification</button>
      </Link>
      <Link to="/admin">
        <button className="otherBtn">Data-Handling</button>
      </Link>
      <Link to="/stats">
        <button className="otherBtn">Statistics</button>
      </Link>
    </div>
  );
};

export default AdminNav;
