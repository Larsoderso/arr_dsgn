import React from "react";
import { Link } from "react-router-dom";
import Arrive_three_icon from "./../Icons/arrive_icon.js";
import Search from "./search.js";

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header className="x_headbar">
    <Arrive_three_icon />

    <Search style={{ marginLeft: "128px" }} />
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/roster">Roster</Link>
        </li>
        <li>
          <Link to="/schedule">Schedule</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
