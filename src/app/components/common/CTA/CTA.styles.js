import styled from "styled-components";

export const SectionCTA = styled.section`
  margin-top: 180px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1440px) {
    margin-top: 150px;
  }

  @media (max-width: 790px) {
    padding: 0 32px;
  }

  @media (max-width: 590px) {
    margin-top: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 125px 0 128px;
  border-top: 1px solid #292f49;
  border-bottom: 1px solid #292f49;
  align-items: center;
  width: 100%;

  @media (max-width: 590px) {
    padding: 140px 0 170px;
    border-top: unset;
  }
`;

export const CtaTitle = styled.h2`
  text-align: center;
  color: #fff;
  font-size: 56px;
  font-weight: 600;
  line-height: 64px;
  padding-bottom: 30px;

  @media (max-width: 590px) {
    font-size: 42px;
    padding-bottom: 10px;
  }
`;

export const CTALink = styled.a`
  transition: 0.2s;
  font-size: 22px;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 12px;

  svg path {
    fill: #fff;
    transition: 0.2s;
  }
`;

export const CTALinkWrapper = styled.div`
  color: #fff;
  font-weight: 600;
  border-bottom: 2px solid #fff;
  padding-bottom: 8px;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    color: #213ed7;
    border-bottom: 2px solid #213ed7;

    a {
      color: #213ed7 !important;
    }

    svg path {
      fill: #213ed7;
    }
  }

  @media (max-width: 590px) {
    font-size: 18px;

    a {
      font-size: 18px;
    }
  }
`;