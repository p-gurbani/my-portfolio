import { useTheme } from "styled-components";
import {
  Left,
  Logo,
  MobileNavLinkItem,
  NavLinkItem,
  NavLinkItemsContainer,
  Right,
  SmallCase,
  TopBarContainer,
} from "./topBarStyled";

import { HideOnMobile, ShowOnMobile } from "../common/styled";
import SideBar from "../sideBar/SideBar";
import { func } from "prop-types";
import ThemeToggler from "../themeToggler/ThemeToggler";
import { NavLink } from "react-router-dom";
import { GradientText } from "../common/styled";
import { THEMES } from "../../theme/themes";

const TopBar = ({ toggleTheme }) => {
  const theme = useTheme();
  const activeColor = theme.colors.navLink.active;
  const inactiveColor = theme.colors.navLink.inactive;
  const isDarkMode = theme.type === THEMES.DARK;

  const activeLinkStyle = ({ isActive }) => ({
    color: isActive ? activeColor : inactiveColor,
  });

  return (
    <TopBarContainer
      bgColor={theme.colors.body}
      hp={theme.spaces.padding.horizontal}
    >
      <Left>
        <NavLink className="link" to="/">
          <Logo color={theme.colors.heading}>
            <SmallCase>P</SmallCase>ANKA<SmallCase>J</SmallCase>
          </Logo>
        </NavLink>
      </Left>
      <Right color={inactiveColor}>
        <HideOnMobile>
          <NavLinkItemsContainer>
            <ThemeToggler toggleTheme={toggleTheme} />
            <NavLink className="link" style={activeLinkStyle} to="/">
              <NavLinkItem activeColor={activeColor}>work</NavLinkItem>
            </NavLink>

            <NavLink className="link" style={activeLinkStyle} to="/about">
              <NavLinkItem activeColor={activeColor}>about</NavLinkItem>
            </NavLink>

            <NavLink className="link" style={activeLinkStyle} to="/contact">
              <NavLinkItem activeColor={activeColor}>
                <GradientText dark={!isDarkMode}>contact</GradientText>
              </NavLinkItem>
            </NavLink>
          </NavLinkItemsContainer>
        </HideOnMobile>
        <ShowOnMobile>
          <NavLinkItemsContainer>
            <ThemeToggler toggleTheme={toggleTheme} />
            <SideBar>
              <MobileNavLinkItem activeColor={activeColor}>
                <NavLink className="link" style={activeLinkStyle} to="/">
                  work
                </NavLink>
              </MobileNavLinkItem>

              <MobileNavLinkItem activeColor={activeColor}>
                <NavLink className="link" style={activeLinkStyle} to="/about">
                  about
                </NavLink>
              </MobileNavLinkItem>

              <MobileNavLinkItem activeColor={activeColor}>
                <NavLink className="link" style={activeLinkStyle} to="/contact">
                  <GradientText dark={!isDarkMode}>contact</GradientText>
                </NavLink>
              </MobileNavLinkItem>
            </SideBar>
          </NavLinkItemsContainer>
        </ShowOnMobile>
      </Right>
    </TopBarContainer>
  );
};

TopBar.propTypes = {
  toggleTheme: func.isRequired,
};

export default TopBar;
