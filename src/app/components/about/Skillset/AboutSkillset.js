import Image from "next/image";
import React from "react";
import aboutContent from "../../../data/about.json";
import {
  SkillsetSection,
  SkillsetContainer,
  StickyBox,
  StickyContainer,
  SkillsetTitle,
  SkillsetContent,
  SkillsetList,
  SkillsetItem,
  SkillsetItemTitle,
  SkillsetItemParagraph,
} from "./AboutSkillset.styles";

const AboutSkillset = ({ skillset }) => {
  return (
    <SkillsetSection>
      <SkillsetContainer className="container">
        <StickyContainer>
          <StickyBox className="sticky">
            <SkillsetTitle>{skillset.title}</SkillsetTitle>
            <SkillsetContent>{skillset.description}</SkillsetContent>
          </StickyBox>
        </StickyContainer>
        <SkillsetList>
          {skillset.skills.map((skill, index) => (
            <SkillsetItem key={index}>
              <Image
                src={`/assets/skillset-icons/${skill.icon}`}
                alt={skill.title}
                width="55"
                height="55"
              />
              <SkillsetItemTitle>{skill.title}</SkillsetItemTitle>
              <SkillsetItemParagraph>{skill.description}</SkillsetItemParagraph>
            </SkillsetItem>
          ))}
        </SkillsetList>
      </SkillsetContainer>
    </SkillsetSection>
  );
};

export default AboutSkillset;
