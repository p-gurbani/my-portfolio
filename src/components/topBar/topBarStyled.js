import styled from "styled-components";

export const TopBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  padding-left: ${({ hp }) => hp};
  padding-right: ${({ hp }) => hp};
  position: sticky;
  top: 0;
  background-color: ${({ bgColor }) => bgColor};
  transition: all 0.5s linear;
  z-index: 2;
`;

export const Left = styled.div``;
export const Logo = styled.span`
  font-size: 20px;
  font-weight: bold;
  line-height: 0;
  color: ${({ color }) => color};
`;
export const SmallCase = styled.span`
  font-size: 31px;
  text-transform: lowercase;
`;

export const Right = styled.div`
  font-size: 20px;
  font-weight: 400;
  line-height: 0;
  margin-top: -4px;
  color: ${({ color }) => color};
`;

export const NavLinkItemsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NavLinkItem = styled.span`
  margin-left: 40px;
  cursor: pointer;
  &:hover {
    color: ${({ activeColor }) => activeColor};
  }
`;

export const MobileNavLinkItem = styled.span`
  padding: 8px;
  margin-bottom: 40px;
  text-decoration: none;
  font-size: 20px;
  color: ${({ color }) => color};
  display: block;
  transition: 0.5s linear;
`;
