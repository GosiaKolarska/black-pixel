import styled from "styled-components";

export const HeroSection = styled.section`
  padding: 215px 0 65px;
  background-color: #0c0e15;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 1440px) {
    padding: 190px 0 65px;
  }

  @media (max-width: 590px) {
    padding: 155px 0 65px;
  }
`;

export const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    max-width: 100%;
  }
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(12, 14, 21, 0.7);
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 40%;
    background: linear-gradient(
      0deg,
      #0c0e15 35.07%,
      rgba(12, 14, 21, 0) 84.78%
    );
    pointer-events: none;
  }

  @media (max-width: 990px) {
    width: 100%;

    video {
      opacity: 0.12;
    }
  }
`;

export const Container = styled.div`
  position: relative;
`;

export const HeroSectionContentWrapper = styled.div`
  @media (max-width: 990px) {
    padding: 0 32px;
  }
`;

export const Title = styled.h1`
  color: white;
  font-size: 62px;
  font-weight: 600;
  line-height: 70px;
  max-width: 680px;

  @media (max-width: 590px) {
    font-size: 42px;
    line-height: 48px;
    max-width: 260px;
  }
`;

export const WhiteLine = styled.span`
  width: 50px;
  height: 4px;
  background-color: white;
  display: block;
  margin: 36px 0 32px;

  @media (max-width: 590px) {
    margin: 35px 0 30px;
  }
`;

export const HeroContent = styled.h2`
  color: white;
  max-width: 426px;
  font-size: 32px;
  font-weight: 600;
  line-height: 40px;
  padding-bottom: 24px;

  @media (max-width: 590px) {
    font-size: 22px;
    line-height: 30px;
    padding-bottom: 40px;
  }
`;

export const LinksWrapper = styled.div``;

export const CompaniesWrapper = styled.div`
  padding-top: 128px;

  @media (max-width: 1440px) {
    padding-top: 75px;
  }

  @media (max-width: 990px) {
    padding: 128px 32px 0;
  }

  @media (max-width: 590px) {
    padding: 112px 0 0;
  }
`;

export const CompaniesTitle = styled.h3`
  color: #6c7396;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.24px;
  text-transform: uppercase;

  @media (max-width: 590px) {
    padding-left: 32px;
  }
`;

export const CompaniesList = styled.ul`
  display: flex;
  gap: 20px;

  @media (max-width: 590px) {
    overflow-x: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const CompanyItem = styled.li`
  padding: 13px 21px;
  display: flex;
  align-items: center;

  &:first-child {
    padding-left: 0;
  }
  &:last-child {
    padding-right: 0;
  }

  @media (max-width: 590px) {
    padding: 13px 25px;
    scroll-snap-align: start;
    flex: none;

    img {
      height: 25px;
      object-fit: contain;
    }

    &:first-child img {
      height: 46px;
    }

    &:first-child {
      padding-left: 36px;
    }

    &:last-child {
      padding-right: 25px;
    }
  }
`;
