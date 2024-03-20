import styled from "styled-components";

export const HeroSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  padding-top: 110px;
  position: absolute;
  top: 0;
  right: -160px;
  height: 100%;
  z-index: 0;

  img {
    object-fit: contain;
    height: 100%;
    width: auto;
  }

  &:after {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;
    height: 40%;
    background: linear-gradient(
      0deg,
      rgb(12, 14, 21) 8.07%,
      rgba(12, 14, 21, 0) 24.78%
    );
    pointer-events: none;
  }

  @media (max-width: 990px) {
    right: 0;
    img {
      opacity: 0.2;
    }
  }

  @media (max-width: 490px) {
    width: 100%;

    img {
      width: 100%;
      height: auto;
    }
  }
`;

export const LeftContent = styled.div`
  padding-top: 215px;
  z-index: 9;

  @media (max-width: 590px) {
    padding-top: 145px;
  }
`;

export const FirstSection = styled.div`
  max-width: 700px;

  @media (max-width: 990px) {
    padding: 40px 32px 77px;
    max-width: 100%;
  }

  @media (max-width: 590px) {
    padding: 0px 32px 70px;
  }
`;

export const ContainerWrapper = styled.div`
  position: relative;
`;


export const FirstSectionTtile = styled.h1`
  color: white;
  font-size: 62px;
  font-weight: 600;
  line-height: 70px;
  padding-bottom: 42px;

  @media (max-width: 590px) {
    font-size: 42px;
    padding-bottom: 19px;
  }
`;

export const FirstSectionParagraph = styled.h2`
  color: white;
  font-size: 32px;
  font-weight: 600;
  line-height: 40px;

  @media (max-width: 590px) {
    font-size: 22px;
    line-height: 29px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 40px 0 30px;
  color: white;
  justify-content: space-between;

  a {
    text-decoration-line: underline;
  }

  @media (max-width: 990px) {
    padding: 0 32px 75px;
    column-gap: 10px;
    flex-direction: row;
  }

  @media (max-width: 590px) {
    padding: 0 32px 33px;
    flex-direction: column;
  }
`;

export const ListItem = styled.li`
  max-width: 440px;
  width: 100%;
  font-size: 22px;
  font-weight: 600;
  display: flex;
  padding: 22px 0;
  align-items: flex-start;
  gap: 6px;
  border-top: 1px solid #292f49;

  &:nth-child(3),
  &:nth-child(4) {
    border-bottom: 1px solid #292f49;
  }

  @media (max-width: 790px) {
    max-width: 320px;
  }

  @media (max-width: 590px) {
    max-width: 100%;
    font-size: 18px;
    padding: 22px 0;
  }
`;

export const ButtonMore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 52px;
  transition: all 0.3s;
  height: auto;

  &.hide {
    opacity: 0;
    padding: 0;
    height: 0;
  }

  @media (max-width: 790px) {
    padding-bottom: 50px;
  }
`;
