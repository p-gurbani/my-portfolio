import styled from "styled-components";
import { mobileL } from "../../responsive";

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  font-family: "Quicksand", sans-serif;

  ${mobileL`
    margin-top: 40px;
    align-items: flex-start;
  `}
`;

export const IntroIcon = styled.span`
  font-size: 28px;
  font-weight: 300;

  ${mobileL`
    font-size: 24px;
  `}
`;

export const IntroText = styled.span`
  font-size: 24px;
  max-width: 800px;
  text-align: center;
  font-weight: 400;
  margin-top: 10px;
  line-height: 1.5;

  ${mobileL`
    font-size: 20px;
    text-align: left;
  `}
`;

export const FontBolder = styled.span`
  font-weight: 800;
`;

export const IntroHighlight = styled(FontBolder)`
  color: #34ac34;
`;
