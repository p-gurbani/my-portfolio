import {
  LinksContainer,
  OpenProjectButton,
  Overlay,
  OverlayDesc,
  OverlayHeading,
  OverlaySkillsContainer,
  Project,
  ProjectImage,
  ProjectLink,
  SourceButton,
} from "./projectThumbnailStyled";
import { darkTheme, THEMES } from "../../theme/themes";
import skills from "../../data/skills";
import { useEffect, useState } from "react";
import { SkillIcon, SkillIconContainer } from "../skillBox/skillBoxStyled";
import { useTheme } from "styled-components";

const ProjectThumbnail = ({ project }) => {
  const theme = useTheme();
  const isDarkMode = theme.type === THEMES.DARK;
  const bgColor = darkTheme.colors.card;
  const color = darkTheme.colors.text.heading;
  const shadowColor = isDarkMode ? "rgb(0,0,0,0.4)" : "rgb(240,240,240,0.8)";

  const [projectSkills, setProjectSkills] = useState([]);

  useEffect(() => {
    const ps = [];
    project.tech?.forEach((tech) => {
      skills.forEach((st) => {
        const skill = st.data.find((s) => s.title === tech);
        if (skill) {
          ps.push(skill);
        }
      });
    });
    setProjectSkills(ps);
  }, [project.tech]);

  return (
    <Project target="_blank">
      <ProjectImage src={project.img} />
      <Overlay bgColor={bgColor} color={color} shadowColor={shadowColor}>
        <OverlayHeading>{project.name}</OverlayHeading>
        <OverlayDesc>{project.description}</OverlayDesc>
        <OverlaySkillsContainer>
          {projectSkills.map((ps) => (
            <SkillIconContainer key={ps.title}>
              <SkillIcon invert={ps.invertIcon} src={ps.icon} />
            </SkillIconContainer>
          ))}
        </OverlaySkillsContainer>
        <LinksContainer>
          <ProjectLink href={project.link} target="_blank">
            <OpenProjectButton>Open Project</OpenProjectButton>
          </ProjectLink>
          <ProjectLink href={project.source} target="_blank">
            <SourceButton>View source</SourceButton>
          </ProjectLink>
        </LinksContainer>
      </Overlay>
    </Project>
  );
};

export default ProjectThumbnail;
