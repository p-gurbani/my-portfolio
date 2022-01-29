import { Heading, SectionContainer } from "../common/styled";
import {
  MessageBox,
  SearchIcon,
  SkillSearchBox,
  SkillSearchBoxContainer,
  SkillShowcaseContainer,
} from "./skillsStyled";
import skills from "../../data/skills";
import SkillBox from "../skillBox/SkillBox";
import { useTheme } from "styled-components";
import search from "../../images/icons/search.svg";
import { THEMES } from "../../theme/themes";
import { useEffect, useState } from "react";

const Skills = () => {
  const theme = useTheme();
  const isDarkMode = theme.type === THEMES.DARK;

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSkills, setFilteredSkills] = useState(skills);

  useEffect(() => {
    const st = searchTerm.toLowerCase();
    const tempSkills = JSON.parse(JSON.stringify(skills));
    const fs = [];
    tempSkills.forEach((s) => {
      if (s.type.toLowerCase().includes(st)) {
        fs.push(s);
        return;
      }
      const fd = s.data.filter(
        (d) => d.title.includes(st) || (d.keywords && d.keywords.includes(st))
      );
      if (fd && fd.length) {
        s.data = fd;
        fs.push(s);
      }
    });
    setFilteredSkills(fs);
  }, [searchTerm]);

  return (
    <SectionContainer>
      <Heading>I specialize in the following skills.</Heading>
      <SkillSearchBoxContainer>
        <SearchIcon invert={isDarkMode} src={search} />
        <SkillSearchBox
          placeholder="type a skill here"
          bgColor={theme.colors.card}
          color={theme.colors.text.placeholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </SkillSearchBoxContainer>
      <SkillShowcaseContainer>
        {filteredSkills.map((sk) => (
          <SkillBox key={sk.type} skills={sk} />
        ))}
        {!filteredSkills.length && (
          <MessageBox color={theme.colors.text.placeholder}>
            Looks like I don't have that skill, search for something else maybe?
          </MessageBox>
        )}
      </SkillShowcaseContainer>
    </SectionContainer>
  );
};

export default Skills;
