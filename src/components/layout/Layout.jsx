import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

import LayoutHeader from "./layout items/LayoutHeader";
import Footer from "./layout items/LayoutFooter";
import { StyledChatIcon } from "./styled";
import ChatBox from "../chatBox/ChatBox";

const Layout = () => {
  const [hideChat, setHideChat] = useState(true);
  const handleChat = (type) => {
    switch (type) {
      case "toggle":
        setHideChat(!hideChat);
        break;
      case "open":
        setHideChat(false);
        break;
      default:
        setHideChat(true);
    }
  };
  return (
    <>
      {!hideChat && <ChatBox handleChat={handleChat} />}
      <LayoutHeader />
      <StyledChatIcon onClick={() => handleChat("toggle")} />
      <Outlet />
      <Footer />
    </>
  );
};
export default Layout;
