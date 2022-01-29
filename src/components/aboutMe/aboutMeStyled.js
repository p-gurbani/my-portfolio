import styled from "styled-components";
import { mobileL } from "../../responsive";

export const AboutMeContainer = styled.div`
  display: flex;

  ${mobileL`
    flex-direction: column;
  `}
`;

export const MyImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const MyImage = styled.img`
  width: 80%;
  border-radius: 10px;
  object-fit: cover;

  ${mobileL`
    width: 100%;
  `}
`;

export const DescContainer = styled.div`
  flex: 1;
  line-height: 1.4;
`;

export const DescWrapper = styled.div`
  max-width: 500px;
`;

export const DescHeading = styled.h1`
  font-size: 60px;
  line-height: 1;
  margin-top: 10px;
  margin-bottom: 0px;

  ${mobileL`
    font-size: 50px;
    margin-top: 40px;
  `}
`;

export const DescHighlight = styled.p`
  font-family: "Quicksand", sans-serif;
  margin-top: 80px;
  margin-bottom: 40px;
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 0.5px;

  ${mobileL`
    margin-top: 40px;
    font-size: 16px;
    letter-spacing: 0.4px;
  `}
`;

export const DescDetail = styled.p`
  font-family: "Quicksand", sans-serif;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0.5px;
  margin-top: 20px;

  ${mobileL`
    font-size: 14px;
    letter-spacing: 0.4px;
  `}
`;

export const DescResidence = styled.p`
  font-family: "Quicksand", sans-serif;
  font-weight: 400;
  font-size: 13px;
  margin-top: 40px;
`;
