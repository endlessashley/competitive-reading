import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

import {GiBookshelf, GiTrophy, GiCardRandom, GiStrong} from "react-icons/gi"
import ReactTooltip from 'react-tooltip';

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/readBookHistory">
              View Bookshelf
            </Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1 header">
      <h1>
        <Link to="/">
          <img src="./images/reader-set-go-logo.png" alt="reader set go logo"></img>
        </Link>
      </h1>

      <nav >
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
