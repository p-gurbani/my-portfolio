import styled from "styled-components";
import { laptop, mobileL } from "../../responsive";

export const ProjectShowcaseContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ProjectThumbnailContainer = styled.div`
  flex: 1;
  max-width: 33%;
  min-width: 33%;

  ${laptop`
    max-width: 50%;
    min-width: 50%;
  `}

  ${mobileL`
    max-width: 100%;
    min-width: 100%;
  `}
`;
