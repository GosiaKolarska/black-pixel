import styled from "styled-components";

export const SkillsetSection = styled.section`
  padding: 286px 0 415px;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 1100px) {
    padding-bottom: 150px;
  }

  @media (max-width: 990px) {
    padding: 130px 0 200px;
  }

  @media (max-width: 590px) {
    padding: 66px 0 100px;
  }
`;

export const SkillsetContainer = styled.div`
  display: flex;
  gap: 20px;
  position: relative;

  @media (max-width: 990px) {
    flex-direction: column;
    gap: 50px;
  }
`;

export const StickyContainer = styled.div`
  position: relative;

  @media (max-width: 990px) {
    padding: 0 32px;
  }
`;

export const StickyBox = styled.div`
  position: sticky;
  top: 140px;

  @media (max-width: 990px) {
    position: static;
  }
`;

export const SkillsetTitle = styled.h2`
  color: white;
  font-size: 56px;
  font-weight: 600;
  line-height: 64px;
  padding-bottom: 88px;

  @media (max-width: 590px) {
    font-size: 32px;
    padding-bottom: 25px;
  }
`;

export const SkillsetContent = styled.p`
  color: white;
  font-size: 32px;
  font-weight: 600;
  line-height: 40px;
  padding-right: 55px;

  @media (max-width: 590px) {
    font-size: 24px;
    line-height: 30px;
    padding-right: 0;
  }
`;

export const SkillsetList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  @media (max-width: 990px) {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const SkillsetItem = styled.li`
  width: 480px;
  padding: 24px;
  align-items: flex-start;
  gap: 16px;
  background-color: #fff;
  margin-bottom: 16px;
  border-radius: 12px 12px 12px 0px;
  display: flex;
  flex-direction: column;

  @media (max-width: 990px) {
    width: 100%;
    gap: 18px;
    scroll-snap-align: center;
    flex-shrink: 0;
    margin-right: 16px;

    max-width: 240px;

    &:first-child {
      margin-left: 32px;
    }
  }
`;

export const SkillsetItemTitle = styled.h4`
  color: #0c0e15;
  font-size: 22px;
  font-weight: 600;

  @media (max-width: 590px) {
    font-size: 18px;
  }
`;
export const SkillsetItemParagraph = styled.p`
  color: #0c0e15;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;

  @media (max-width: 590px) {
    font-size: 16px;
    line-height: 21px;
  }
`;
