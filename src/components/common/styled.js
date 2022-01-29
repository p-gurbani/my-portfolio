import styled, { css } from "styled-components";
import { mobileL } from "../../responsive";

export const HideOnMobile = styled.div`
  ${mobileL`
    display: none;
  `}
`;

export const ShowOnMobile = styled.div`
  display: none;
  ${mobileL`
    display: unset;
  `}
`;

export const RightFlex = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Section = styled.div`
  margin-top: 100px;

  ${mobileL`
    margin-top: 80px;
  `}
`;

export const SectionSm = styled.div`
  margin-top: 80px;

  ${mobileL`
    margin-top: 30px;
  `}
`;

export const Heading = styled.h1`
  font-size: 30px;
  margin-bottom: 30px;

  ${mobileL`
    font-size: 28px;
    font-weight: 500;
    margin-bottom: 35px;
  `}
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${mobileL`
    align-items: flex-start;
  `}
`;

export const SubmitButton = styled.button`
  border: none;
  border-radius: 40px;
  padding: 13px 18px;
  font-weight: bolder;
  width: ${({ width }) => width || "100px"};
  margin-top: 10px;
  background-color: ${({ bgColor }) => bgColor};
  transition: background-color 0.5s linear;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${mobileL`
    align-self: end;
  `}

  &:hover {
    cursor: pointer;
  }
`;

// gradients
// background: linear-gradient(to right, #c6ffdd, #fbd786, #f7797d);
// background: linear-gradient(to right, #da4453, #89216b);

const lightGradient = css`
  background: linear-gradient(to right, #c6ffdd, #fbd786, #f7797d);
`;

const darkGradient = css`
  background: linear-gradient(to right, #da4453, #89216b);
`;

export const GradientText = styled.span`
  ${({ dark }) => (dark ? darkGradient : lightGradient)};
  background-size: cover;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;
