import { ReactElement } from "react";
import { NavLink } from "react-router-dom";
import ToggleTheme from "./ToggleTheme";

const Nav = (): ReactElement => {
  return (
    <nav className="top-navigation">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/pro">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/cv">CV</NavLink>
        </li>
        <li>
          <ToggleTheme />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
