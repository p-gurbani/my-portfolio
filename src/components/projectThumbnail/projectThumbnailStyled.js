import styled from "styled-components";

export const ProjectImage = styled.img`
  width: 100%;
  padding: 4px;
  transition: transform 0.5s ease-in-out;
  overflow: hidden;
`;

export const Overlay = styled.div`
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  position: absolute;
  border-radius: 8px 8px 0px 0px;
  height: 120px;
  transform: scale(1.5);
  right: 0;
  left: 0;
  bottom: 0;
  opacity: 0;
  transition: all 0.4s ease-in-out;
  padding: 25px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px -20px 40px ${({ shadowColor }) => shadowColor};
`;

export const OverlayHeading = styled.h2`
  margin: 0px;
`;

export const OverlayDesc = styled.span`
  font-family: "Quicksand", sans-serif;
`;

export const Project = styled.a`
  display: block;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  margin: 20px 10px;
  box-sizing: border-box;

  &:hover ${ProjectImage} {
    transform: scale(0.8);
  }

  &:hover ${Overlay} {
    opacity: 1;
    transform: scale(1);
  }
`;

export const OverlaySkillsContainer = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center;  */
  margin-top: 25px;
`;
