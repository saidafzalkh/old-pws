import { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/element/Header";
import LayoutTheme from "./LayoutTheme";

const Layout = (): ReactElement => {
  return (
    <LayoutTheme>
      <Header />
      <Outlet />
    </LayoutTheme>
  );
};

export default Layout;
