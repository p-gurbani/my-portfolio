import styled from "styled-components";
import { mobileL } from "../../responsive";

export const ContactMeContainer = styled.div`
  display: flex;

  ${mobileL`
    flex-direction: column;
  `}
`;

export const BusinessCardContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
`;

export const FlipCard = styled.div`
  width: 90%;
  perspective: 1000px;

  &:hover ${FlipCardInner} {
    transform: rotateY(-180deg);
  }

  ${mobileL`
    width: 100%;
  `}
`;

export const FlipCardFront = styled.div`
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;

export const FlipCardBack = styled(FlipCardFront)`
  position: absolute;
  top: 0;
  transform: rotateY(180deg);
`;

export const BusinessCard = styled.img`
  width: 100%;
  border-radius: 8px;
  object-fit: contain;
  box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.5s ease-in-out;

  &:hover {
    box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.6);
  }
`;

export const ContactFormContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  ${mobileL`
    margin-top: 20px;
  `}
`;

export const FormHeadingContainer = styled.span`
  line-height: 1;
  margin-top: 10px;
  margin-bottom: 30px;
  margin-left: 8px;
  display: flex;
  flex-direction: column;
`;

export const FormHeadingHighlight = styled.span`
  font-size: 32px;
  font-weight: 700;

  ${mobileL`
    font-size: 28px;
  `}
`;

export const FormHeadingInfo = styled.span`
  margin-top: 10px;
  font-size: 20px;
  font-weight: 400;
  font-family: "Quicksand", sans-serif;

  ${mobileL`
    font-size: 16px;
  `}
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
`;

export const FlexWrapper = styled.div`
  display: flex;
`;

export const FormLabel = styled.label`
  display: none;
`;

export const FormInput = styled.input`
  flex: 1;
  padding: 16px 18px;
  box-sizing: border-box;
  margin-bottom: 10px;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  margin-right: ${({ mr }) => mr};
  width: ${({ width }) => width};
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  transition: background-color 0.5s linear, color 0.5s linear;

  &::placeholder {
    color: ${({ placeholderColor }) => placeholderColor};
  }

  &:focus {
    outline: solid;
    outline-color: ${({ color }) => color};
  }

  &:focus::placeholder {
    filter: invert(0.5);
  }
`;

export const FormTextArea = styled.textarea`
  padding: 16px 18px;
  font-family: "Helvetica Neue", sans-serif;
  font-size: 15px;
  border: none;
  border-radius: 10px;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  transition: background-color 0.5s linear, color 0.5s linear;
  line-height: 1.5;

  &::placeholder {
    color: ${({ placeholderColor }) => placeholderColor};
  }

  &:focus {
    outline: solid;
    outline-color: ${({ color }) => color};
  }
`;

export const ThankYouMessage = styled.h1`
  font-family: "Quicksand", sans-serif;
  text-align: center;
  font-weight: 500;
  width: 100%;
`;
