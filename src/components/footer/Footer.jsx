import { useTheme } from "styled-components";
import {
  Copywrite,
  FooterContainer,
  SocialLinkItem,
  SocialLinks,
  Wrapper,
} from "./footerStyled";

import { ReactComponent as Instagram } from "../../images/social/instagram.svg";
import { ReactComponent as LinkedIn } from "../../images/social/linkedin.svg";
import { ReactComponent as Twitter } from "../../images/social/twitter.svg";
import { ReactComponent as Gmail } from "../../images/social/gmail.svg";
import { ReactComponent as Github } from "../../images/social/github.svg";
import { THEMES } from "../../theme/themes";

const Footer = () => {
  const theme = useTheme();
  const darkMode = theme.type === THEMES.DARK;
  const darkModeClass = darkMode ? "svg icon-darkmode" : "svg";

  return (
    <FooterContainer bgColor={theme.colors.card}>
      <Wrapper hp={theme.spaces.padding.horizontal}>
        <Copywrite color={theme.colors.text.placeholder}>
          © Pankaj Gurbani | pankajgurbani.connect@gmail.com
        </Copywrite>

        <SocialLinks>
          <SocialLinkItem
            target="_blank"
            href="https://instagram.com/pankajgurbani.connect"
            ml="0px"
          >
            <Instagram className={darkModeClass} />
          </SocialLinkItem>
          <SocialLinkItem
            target="_blank"
            href="https://www.linkedin.com/in/gurbanipankaj"
          >
            <LinkedIn className={darkModeClass} />
          </SocialLinkItem>
          <SocialLinkItem
            target="_blank"
            href="https://twitter.com/pankajgurbani_"
          >
            <Twitter className={darkModeClass} />
          </SocialLinkItem>
          <SocialLinkItem
            target="_blank"
            href="mailto:pankajgurbani.connect@gmail.com"
          >
            <Gmail className={darkModeClass + " fill-path"} />
          </SocialLinkItem>
          <SocialLinkItem target="_blank" href="https://github.com/p-gurbani">
            <Github
              style={{
                width: "100%",
                height: "100%",
                marginTop: "1px",
                color: "white",
              }}
              className={darkModeClass + " fill-path"}
            />
          </SocialLinkItem>
        </SocialLinks>
      </Wrapper>
    </FooterContainer>
  );
};

export default Footer;
