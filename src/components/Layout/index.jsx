import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import "./index.scss";

const Layout = () => {
  return (
    <>
      <Sidebar></Sidebar>
      <Outlet></Outlet>
    </>
  );
};
export default Layout;
