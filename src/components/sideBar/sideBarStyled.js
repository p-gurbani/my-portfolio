import styled from "styled-components";

export const SideBarContainer = styled.div`
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: ${({ bgColor }) => bgColor};
  overflow-x: hidden;
  transition: 0.5s;
`;

export const CloseButtonContainer = styled.div`
  position: absolute;
  top: 32px;
  right: 22px;
  font-size: 38px;
  margin-left: 50px;
`;

export const MenuButton = styled.span`
  font-size: 28px;
  cursor: pointer;
  margin-left: 20px;
  line-height: 0;
`;

export const SideBarLinksContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ color }) => color};
`;
