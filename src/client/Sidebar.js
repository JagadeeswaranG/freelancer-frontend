import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { config } from "../config/Config";

// Side bar
function Sidebar() {
  const [user, setUser] = useState();

   useEffect(() => {
    setUser(localStorage.getItem(config.storage_key2));
  });

  return (
    <ul class="navbar-nav sidebar sidebar-dark accordion" id="accordionSidebar">
      <a
        class="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      ></a>
      <hr class="sidebar-divider my-0" />

      <li class="nav-item">
        <a class="nav-link collapsed" href="#">
          <span id="portal">Client Portal</span>
        </a>
      </li>

      <hr class="sidebar-divider" />

      <li class="nav-item">
        <Link
            to={`/client_portal/viewProjects/${user}`}
          class="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i class="fa fa-question-circle" aria-hidden="true"></i>
          <span id="subtitle">My Projects</span>
        </Link>
      </li>
      {/* <li class="nav-item">
        <Link
          //   to={"/admin_portal/students/list"}
          class="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i class="fa fa-graduation-cap" aria-hidden="true"></i>
          <span id="subtitle">Post New Projects</span>
        </Link>
      </li> */}

      <hr class="sidebar-divider" />
    </ul>
  );
}

export default Sidebar;