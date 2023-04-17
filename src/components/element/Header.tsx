import { ReactElement } from "react";
import Nav from "../common/Nav";

const Header = (): ReactElement => {
  return (
    <header className="top-header">
      <div className="container top-header__container">
        <Nav />
      </div>
    </header>
  );
};

export default Header;
