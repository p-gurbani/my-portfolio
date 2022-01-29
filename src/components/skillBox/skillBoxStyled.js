import styled from "styled-components";
import { mobileL } from "../../responsive";

export const SkillBoxContainer = styled.div`
  background-color: ${({ bgColor }) => bgColor};
  padding: 30px 70px;
  margin: 8px;
  transition: background-color 0.5s linear;
  border-radius: 20px;
  flex: 1;
  display: flex;
  justify-content: center;

  ${mobileL`
    width: 100%;
    margin: 8px 0px;
  `}
`;

export const Wrapper = styled.div``;

export const SkillHeading = styled.h2`
  line-height: 0;
`;

export const SkillHeadingContainer = styled.div`
  display: flex;
  align-items: center;

  ${mobileL`
    min-width: 178px;
  `}
`;

export const SkillTypeIcon = styled.img`
  width: 30px;
  margin-right: 10px;
  transition: filter 0.5s linear;
  filter: ${({ invert }) => invert && "invert(1)"};
`;

export const SkillsContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;

export const SingleSkillContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const SkillIconContainer = styled.div`
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

export const SkillIcon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  transition: filter 0.5s linear;
  filter: ${({ invert }) => invert && "invert(1)"};
`;

export const SkillTitle = styled.span``;
