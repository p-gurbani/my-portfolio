import styled from "styled-components";
import { laptop, mobileL } from "../../responsive";

export const FooterContainer = styled.footer`
  background-color: ${({ bgColor }) => bgColor};
  position: fixed;
  bottom: 0;
  max-width: 1366px;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  border-radius: 20px 20px 0px 0px;
  transition: background-color 0.5s linear;
  z-index: 3;

  ${laptop`
    position: relative;
  `}

  ${mobileL`
    height: 70px;
  `}
`;

export const Wrapper = styled.div`
  padding-left: ${({ hp }) => hp};
  padding-right: ${({ hp }) => hp};
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mobileL`
    flex-direction: column;
  `}
`;

export const Copywrite = styled.span`
  color: ${({ color }) => color};
  font-size: 13px;

  ${mobileL`
    font-size: 11px;
    margin-bottom: 12px;
  `}
`;

export const SocialLinks = styled.div`
  display: flex;
  ${mobileL`
    padding-bottom: 8px;
  `}
`;

export const SocialLinkItem = styled.a`
  width: 20px;
  height: 20px;
  margin-left: ${({ ml }) => (ml ? ml : "20px")};
  cursor: pointer;
`;
