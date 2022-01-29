import {
  FontBolder,
  IntroContainer,
  IntroHighlight,
  IntroIcon,
  IntroText,
} from "./introStyled";

const Intro = () => {
  return (
    <IntroContainer>
      <IntroIcon>👋🏻</IntroIcon>
      <IntroText>
        <FontBolder>I'm Pankaj Gurbani</FontBolder>
      </IntroText>
      <IntroText>
        "A full-stack&nbsp;
        <IntroHighlight>web-developer & UI/UX designer</IntroHighlight> focused
        on building useful & beautiful applications"
      </IntroText>
    </IntroContainer>
  );
};

export default Intro;
