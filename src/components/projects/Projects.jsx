import {
  ProjectShowcaseContainer,
  ProjectThumbnailContainer,
} from "./projectsStyled";
import { Heading, SectionContainer } from "../common/styled";

import projects from "../../data/projects";
import ProjectThumbnail from "../projectThumbnail/ProjectThumbnail";

const Projects = () => {
  return (
    <SectionContainer>
      <Heading>This is some of my work, have a look around.</Heading>
      <ProjectShowcaseContainer>
        {projects.map((project) => (
          <ProjectThumbnailContainer key={project.id}>
            <ProjectThumbnail project={project} key={project.id} />
          </ProjectThumbnailContainer>
        ))}
      </ProjectShowcaseContainer>
    </SectionContainer>
  );
};

export default Projects;
