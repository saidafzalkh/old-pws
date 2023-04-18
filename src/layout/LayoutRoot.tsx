import { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/element/Header";
import LayoutTheme from "./LayoutTheme";
import Footer from "../components/element/Footer";

const Layout = (): ReactElement => {
  return (
    <LayoutTheme>
      <Header />
      <Outlet />
      <Footer />
    </LayoutTheme>
  );
};

export default Layout;
