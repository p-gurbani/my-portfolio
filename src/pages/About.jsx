import AboutMe from "../components/aboutMe/AboutMe";
import { SectionSm } from "../components/common/styled";
import Page from "../components/page/Page";

const About = () => {
  return (
    <Page>
      <SectionSm>
        <AboutMe />
      </SectionSm>
    </Page>
  );
};

export default About;
