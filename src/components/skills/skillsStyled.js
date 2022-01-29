import styled from "styled-components";
import { mobileL, tablet } from "../../responsive";

export const SkillShowcaseContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: center;
  width: 80%;

  ${tablet`
    width: 100%;
  `}
`;

export const SkillSearchBoxContainer = styled.div`
  position: relative;
  ${mobileL`
    width: 100%;
  `}
`;

export const SearchIcon = styled.img`
  position: absolute;
  padding-top: 9px;
  padding-left: 14px;
  filter: ${({ invert }) => (invert ? "invert(0.7)" : "invert(0.3)")};
  transition: filter 0.5s linear;
`;

export const SkillSearchBox = styled.input`
  border: none;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  padding: 10px 50px;
  border-radius: 20px;
  box-sizing: border-box;
  font-size: 18px;
  margin-bottom: 10px;
  transition: all 0.5s linear;

  &:focus {
    outline: none;
  }

  ${mobileL`
    width: 100%;
  `}
`;

export const MessageBox = styled.div`
  padding: 20px;
  text-align: center;
  line-height: 1.3;
  color: ${({ color }) => color};

  ${mobileL`
    font-size: 14px;
  `}
`;
