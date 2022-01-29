import { Link } from "react-router-dom";
import { RightFlex, Section } from "../components/common/styled";
import CTA from "../components/cta/CTA";
import Intro from "../components/intro/Intro";
import Page from "../components/page/Page";
import Projects from "../components/projects/Projects";
import Skills from "../components/skills/Skills";

const Work = () => {
  return (
    <Page>
      <Intro />
      <Section>
        <Projects />
      </Section>
      <Section>
        <Skills />
      </Section>
      <RightFlex style={{ marginTop: "20px" }}>
        <Link className="link" to="/contact">
          <CTA label="HIRE ME" />
        </Link>
      </RightFlex>
    </Page>
  );
};

export default Work;
