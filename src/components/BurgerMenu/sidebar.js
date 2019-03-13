import { HashRouter, Link } from 'react-router-dom';
import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    <Menu className="#page-wrap">
      <HashRouter >
        <ul>
          <a><Link className="menu-item" to="/">About</Link></a>
          <a><Link className="menu-item" to="/Courses">Courses</Link></a>
          <a><Link className="menu-item" to="/Portfolio">Portfolio</Link></a>
          <a><Link className="menu-item" to="/Contact">Contact</Link></a>
        </ul>
      </HashRouter>
    </Menu>
  );
};

