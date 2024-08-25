import { Outlet } from "react-router-dom";

import LayoutHeader from "./layout items/LayoutHeader";
import Footer from "./layout items/LayoutFooter";

const Layout = () => {
  return (
    <>
      <LayoutHeader />
      <Outlet />
      <Footer />
    </>
  );
};
export default Layout;
