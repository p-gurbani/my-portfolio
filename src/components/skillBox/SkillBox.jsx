import { useTheme } from "styled-components";
import {
  SingleSkillContainer,
  SkillBoxContainer,
  SkillHeading,
  SkillHeadingContainer,
  SkillIcon,
  SkillIconContainer,
  SkillsContainer,
  SkillTitle,
  SkillTypeIcon,
  Wrapper,
} from "./skillBoxStyled";

import { THEMES } from "../../theme/themes";

const SkillBox = ({ skills }) => {
  const theme = useTheme();
  const isDarkMode = theme.type === THEMES.DARK;

  return (
    <SkillBoxContainer bgColor={theme.colors.card}>
      <Wrapper>
        <SkillHeadingContainer>
          <SkillTypeIcon
            invert={isDarkMode && skills.invertIcon}
            src={skills.icon}
          />
          <SkillHeading>{skills.type}</SkillHeading>
        </SkillHeadingContainer>
        <SkillsContainer>
          {skills.data.map((skill) => (
            <SingleSkillContainer key={skill.title}>
              <SkillIconContainer>
                <SkillIcon
                  invert={isDarkMode && skill.invertIcon}
                  src={skill.icon}
                />
              </SkillIconContainer>
              <SkillTitle>{skill.title}</SkillTitle>
            </SingleSkillContainer>
          ))}
        </SkillsContainer>
      </Wrapper>
    </SkillBoxContainer>
  );
};

export default SkillBox;
