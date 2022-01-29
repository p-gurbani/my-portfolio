import styled from "styled-components";
import { THEMES } from "../../theme/themes";

export const ToggleContainer = styled.div`
  width: 60px;
  height: 30px;
  border-radius: 20px;
  border: 1px solid ${({ borderColor }) => borderColor};
  background-color: ${({ bgColor }) => bgColor};
  display: flex;
  align-items: center;
  justify-content: space-around;
  transition: all 0.5s ease-in-out;
  position: relative;
  cursor: pointer;
`;

export const Icon = styled.img`
  width: 15px;
  height: 15px;
`;

export const Switch = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.toggler.switch};
  position: absolute;
  left: ${({ theme }) => (theme.type === THEMES.LIGHT ? "5px" : "35px")};
  transition: all 0.5s ease-in-out;
`;
