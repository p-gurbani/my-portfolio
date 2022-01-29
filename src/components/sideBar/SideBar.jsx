import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useTheme } from "styled-components";
import {
  CloseButtonContainer,
  MenuButton,
  SideBarContainer,
  SideBarLinksContainer,
} from "./sideBarStyled";

const SideBar = ({ children }) => {
  const theme = useTheme();
  const sideBarRef = useRef();
  const location = useLocation();

  const closeSidebar = () => {
    sideBarRef.current.style.width = "0px";
  };

  const openSidebar = () => {
    sideBarRef.current.style.width = "100vw";
  };

  useEffect(() => {
    closeSidebar();
  }, [location]);

  return (
    <>
      <MenuButton onClick={openSidebar}>&#9776;</MenuButton>
      <SideBarContainer bgColor={theme.colors.card} ref={sideBarRef}>
        <CloseButtonContainer onClick={closeSidebar}>
          &times;
        </CloseButtonContainer>
        <SideBarLinksContainer color={theme.colors.navLink.inactive}>
          {children}
        </SideBarLinksContainer>
      </SideBarContainer>
    </>
  );
};

export default SideBar;
