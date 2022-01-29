import { css } from "styled-components";

const size = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
};

const device = {
  mobileS: `(max-width: ${size.mobileS}px)`,
  mobileM: `(max-width: ${size.mobileM}px)`,
  mobileL: `(max-width: ${size.mobileL}px)`,
  tablet: `(max-width: ${size.tablet}px)`,
  laptop: `(max-width: ${size.laptop}px)`,
  laptopL: `(max-width: ${size.laptopL}px)`,
  desktop: `(max-width: ${size.desktop}px)`,
  portrait: `(min-device-width: ${size.mobileL + 1}px) and (max-device-width: ${size.laptop}px) and (orientation:portrait)`,
  landscape: `(min-device-width: ${size.mobileL + 1}px) and (max-device-width: ${size.laptop}px) and (orientation:landscape)`,
};

export const mobileS = (props) => {
  return css`
    @media only screen and ${device.mobileS} {
      ${props}
    }
  `;
};
export const mobileM = (props) => {
  return css`
    @media only screen and ${device.mobileM} {
      ${props}
    }
  `;
};
export const mobileL = (props) => {
  return css`
    @media only screen and ${device.mobileL} {
      ${props}
    }
  `;
};
export const tablet = (props) => {
  return css`
    @media only screen and ${device.tablet} {
      ${props}
    }
  `;
};
export const laptop = (props) => {
  return css`
    @media only screen and ${device.laptop} {
      ${props}
    }
  `;
};
export const laptopL = (props) => {
  return css`
    @media only screen and ${device.laptopL} {
      ${props}
    }
  `;
};
export const desktop = (props) => {
  return css`
    @media only screen and ${device.desktop} {
      ${props}
    }
  `;
};
export const portrait = (props) => {
  return css`
    @media only screen and ${device.portrait} {
      ${props}
    }
  `;
};
export const landscape = (props) => {
  return css`
    @media only screen and ${device.landscape} {
      ${props}
    }
  `;
};

