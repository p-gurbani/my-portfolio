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
  height: 140px;
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

export const Project = styled.div`
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
  margin-top: 25px;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  color: white;
  margin-top: 20px;
`;

export const ProjectLink = styled.a`
  display: block;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
`;

export const SourceButton = styled.div`
  border: 1px solid gray;
  border-radius: 4px;
  padding: 5px 6px;
`;

export const OpenProjectButton = styled.div`
  border-radius: 4px;
  padding: 5px 8px;
  background-color: white;
  color: black;

  &:hover {
    background-color: transparent;
    color: white;
    border: 1px solid white;
  }
`;
