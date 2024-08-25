import { Outlet } from "react-router-dom";

import LayoutHeader from "./layout items/LayoutHeader";
import Banner from "./layout items/Banner";
import Footer from "./layout items/LayoutFooter";

const Layout = () => {
  return (
    <>
      <LayoutHeader />
      <Banner />
      <Outlet />
      <Footer />
    </>
  );
};
export default Layout;
