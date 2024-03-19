import styled from "styled-components";

export const SectionHero = styled.section`
  padding-bottom: 100px;

  @media (max-width: 990px) {
    padding: 0 32px 90px;
  }

  @media (max-width: 590px) {
    padding: 0 32px 0;
  }
`;

export const Container = styled.div``;

export const ExperienceContainer = styled.div`
  padding-bottom: 40px;
  width: 100%;
`;

export const AwardContainer = styled.div`
  width: 100%;
`;

export const Title = styled.h2`
  color: #6b7394;
  font-size: 32px;
  font-weight: 600;
  line-height: 40px;
  padding-top: 10px;
`;

export const ExperienceList = styled.ul``;

export const ExperienceItem = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 80px;
  border-bottom: 1px solid #292f49;
  padding: 40px 0;
  color: white;

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 590px) {
    flex-direction: column;
    gap: 24px;
    padding: 24px 0;
  }
`;

export const ExperienceItemTitle = styled.h3`
  font-size: 32px;
  font-weight: 600;
  line-height: 40px;
  max-width: 440px;
  width: 100%;

  @media (max-width: 590px) {
    font-size: 24px;
    max-width: 100%;
  }
`;

export const ExperienceItemContentParagraph = styled.p`
  font-size: 22px;
  font-weight: 600;
  padding-bottom: 16px;
  line-height: 28px;

  &:last-child {
    padding-bottom: 0;
  }

  @media (max-width: 590px) {
    font-size: 18px;
  }
`;

export const ExperienceItemContent = styled.div`
  max-width: 440px;
  width: 100%;
`;

export const ExperienceItemContentList = styled.ul`
  list-style: disc;
  padding-left: 28px;
  padding-top: 8px;
`;
export const ExperienceItemContentListItem = styled.li`
  font-size: 22px;
  line-height: 30px;
  padding-bottom: 6px;

  &:last-child {
    padding-bottom: 0;
  }

  @media (max-width: 590px) {
    font-size: 18px;
  }
`;

export const AwardsList = styled.ul``;

export const AwardsItem = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 80px;
  border-bottom: 1px solid #292f49;
  padding: 40px 0;
  color: white;

  .awards-left,
  .awards-right {
    max-width: 440px;
    width: 100%;
  }

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 590px) {
    flex-direction: column;
    gap: 24px;
    padding: 24px 0;
  }
`;

export const AwardsItemTitle = styled.h3`
  font-size: 32px;
  font-weight: 600;
  line-height: 40px;

  @media (max-width: 590px) {
    font-size: 24px;
    max-width: 100%;
  }
`;

export const AwardsItemPosition = styled.span`
  font-size: 22px;
  font-weight: 600;
  line-height: 28px;

  @media (max-width: 590px) {
    font-size: 18px;
  }
`;

export const AwardsItemParagraph = styled.p`
  font-size: 22px;
  font-weight: 600;
  line-height: 28px;

  @media (max-width: 590px) {
    font-size: 18px;
  }
`;
