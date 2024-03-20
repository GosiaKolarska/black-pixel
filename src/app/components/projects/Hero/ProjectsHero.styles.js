import styled from "styled-components";

export const ProjectsSectionHero = styled.section`
  padding: 215px 0 90px;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;

  @media (max-width: 1440px) {
    padding: 190px 0 90px;
  }

  @media (max-width: 1024px) {
    padding: 215px 20px 90px;
  }

  @media (max-width: 590px) {
    padding: 145px 0 20px;
  }
`;

export const ProjectsSectionHeroWrapper = styled.div`
  max-width: 700px;

  @media (max-width: 590px) {
    padding: 0px 32px 70px;
    max-width: 100%;
  }
`;

export const ProjectsSectionHeroTitle = styled.h1`
  color: white;
  font-size: 62px;
  font-weight: 600;
  line-height: 70px;
  padding-bottom: 47px;

  @media (max-width: 590px) {
    font-size: 42px;
    line-height: 48px;
    padding-bottom: 19px;
  }
`;

export const ProjectsSectionHeroSubTitle = styled.p`
  color: white;
  font-size: 32px;
  font-weight: 600;
  line-height: 40px;

  @media (max-width: 590px) {
    font-size: 22px;
    line-height: 29px;
  }
`;

export const ProjectSectionHeroVideo = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  height: 100%;
  object-fit: cover;
  z-index: -1;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.75);
    display: block;
    top: 0;
    left: 0;
    z-index: 1;
  }
`;
