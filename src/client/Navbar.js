import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { config } from "../config/Config";

// Nav bar
function Navbar() {
  const navigate = useNavigate();
  const [username, setUsername] = useState();

  useEffect(() => {
    setUsername(localStorage.getItem(config.storage_key1));
  });

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      <div className="title">
        Freelancer Web App
      </div>
      <ul class="navbar-nav ml-auto">
        <div className="username align-right">{username}</div>
        <div class="topbar-divider d-none d-sm-block"></div>
        <button onClick={handleLogout}  type="button" class="btn btn-secondary">
          Logout
        </button>
      </ul>
    </nav>
  );
}

export default Navbar;
