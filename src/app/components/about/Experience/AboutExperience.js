import React from "react";
import aboutContent from "../../../data/about.json";
import {
  SectionHero,
  Container,
  ExperienceContainer,
  Title,
  ExperienceList,
  ExperienceItem,
  ExperienceItemTitle,
  ExperienceItemContent,
  ExperienceItemContentParagraph,
  ExperienceItemContentList,
  ExperienceItemContentListItem,
  AwardsList,
  AwardsItem,
  AwardsItemTitle,
  AwardsItemPosition,
  AwardsItemParagraph,
  AwardContainer,
} from "./AboutExperience.styles";

const AboutExperience = () => {
  const { experience } = aboutContent;

  return (
    <SectionHero className="flex items-center flex-col">
      <Container className="container">
        <ExperienceContainer>
          <Title>{experience.title}</Title>
          <ExperienceList>
            {experience.items.map((item, index) => (
              <ExperienceItem key={index}>
                <ExperienceItemTitle>{item.title}</ExperienceItemTitle>
                <ExperienceItemContent>
                  <ExperienceItemContentParagraph>
                    {item.description}
                  </ExperienceItemContentParagraph>
                  {item.points && (
                    <ExperienceItemContentList>
                      {item.points.map((point, pointIndex) => (
                        <ExperienceItemContentListItem key={pointIndex}>
                          {point}
                        </ExperienceItemContentListItem>
                      ))}
                    </ExperienceItemContentList>
                  )}
                </ExperienceItemContent>
              </ExperienceItem>
            ))}
          </ExperienceList>
        </ExperienceContainer>
        <AwardContainer>
          <Title>{experience.awards.title}</Title>
          <AwardsList>
            {experience.awards.items.map((award, index) => (
              <AwardsItem key={index}>
                <div className="awards-left">
                  <AwardsItemTitle>{award.title}</AwardsItemTitle>
                  <AwardsItemPosition>{award.position}</AwardsItemPosition>
                </div>
                <AwardsItemParagraph className="awards-right">
                  {award.description}
                </AwardsItemParagraph>
              </AwardsItem>
            ))}
          </AwardsList>
        </AwardContainer>
      </Container>
    </SectionHero>
  );
};

export default AboutExperience;
