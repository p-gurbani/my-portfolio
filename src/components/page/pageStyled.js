import styled from "styled-components";
import { mobileL } from "../../responsive";

export const PageContainer = styled.div`
  margin: ${({ mv }) => mv || "0px"} ${({ mh }) => mh || "0px"};
  padding-bottom: 120px;

  ${mobileL`
    padding-bottom: 80px;
  `}
`;
