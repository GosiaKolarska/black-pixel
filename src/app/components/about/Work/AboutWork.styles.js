import styled from "styled-components";

export const WorkSection = styled.section`
  padding: 80px 0 305px;
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 590px) {
    padding: 0 0 105px;
  }
`;

export const Container = styled.div`
  width: 100%;
`;

export const TitleWork = styled.h2`
  color: #0c0e15;
  font-size: 56px;
  font-weight: 600;
  line-height: 64px;

  span {
    color: #213ed7;
  }
  @media (max-width: 990px) {
    padding: 0 32px;
  }

  @media (max-width: 590px) {
    font-size: 32px;
    line-height: 40px;
    max-width: 100%;
  }
`;

export const WorkList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  flex-direction: column;
  padding-top: 84px;
  position: relative;

  @media (max-width: 990px) {
    padding: 50px 20px 0;
  }
`;

export const WorkTabTitleWrapper = styled.div`
  display: flex;
  align-items: center;

  padding: 28px 18px 28px 22px;
  font-size: 28px;
  font-weight: 600;
  line-height: 34px;
  transition: 0.2s;

  @media (max-width: 590px) {
    font-size: 20px;
    padding: 14px 6px 14px 33px;
  }
`;

export const WorkTabInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 12px;
  padding: 0 10px;
  max-width: 440px;
  width: 100%;
  cursor: pointer;
  position: relative;

  &:hover {
    box-shadow: 0px 0px 7px #000;
    background-color: #cfd2de;

    & ${WorkTabTitleWrapper} {
      transform: translateX(3px);
    }
  }
  &.activeTabInner {
    background-color: #0c0e15;
    box-shadow: 0px 0px 7px #000;
    background-image: url(${(props) => props.$backgroundImage});
    background-size: cover;
    background-position: center;
  }

  &::after {
    content: "";
    width: 420px;
    height: 1px;
    display: block;
    background: #cfd2de;
    position: absolute;
    bottom: 0;
  }

  svg {
    margin-right: 16px;
    width: 16px;
    path {
      fill: #000;
    }
  }

  @media (max-width: 990px) {
    max-width: 100%;

    &::after {
      display: none;
    }
  }
`;

export const WorkTabTitle = styled.h3`
  color: #000;
  font-weight: 600;
`;

export const WorkContent = styled.div`
  max-width: 440px;
  position: absolute;
  left: 550px;
  top: 58px;
  width: 100%;
  height: 100%;

  hr {
    display: none;
  }

  @media (max-width: 990px) {
    position: static;
    max-width: 100%;

    hr {
      margin: 0 10px;
      display: block;
    }
  }
`;

export const WorkContentItem = styled.div`
  padding: 28px 12px 42px;
  display: none;

  &.visible {
    display: block;
  }

  @media (max-width: 990px) {
    display: none;
    &.visible {
      display: block;
    }
  }
`;

export const WorkTab = styled.li`
  transition: all 0.2s;

  display: flex;
  align-items: flex-start;

  &.active ${WorkTabInner} {
    &:after {
      background-color: #000;
    }

    span {
      color: #fff;
    }

    h3 {
      color: #fff;
    }

    svg {
      path {
        fill: #fff;
      }
    }

    ${WorkTabTitleWrapper} {
      transform: translateX(3px);
    }
  }
  &.active ${WorkContentItem} {
    display: block;
  }

  @media (max-width: 990px) {
    display: block;

    &.active ${WorkTabInner} {
      svg {
        transform: rotate(90deg);
      }
    }
  }
`;

export const WorkContentTitle = styled.h3`
  color: #0c0e15;
  font-size: 32px;
  font-weight: 600;
  line-height: 40px;
  padding-bottom: 27px;

  @media (max-width: 590px) {
    font-size: 24px;
    padding-bottom: 24px;
    line-height: 30px;
  }
`;

export const WorkContentParagraph = styled.p`
  color: #0c0e15;
  font-size: 22px;
  font-weight: 400;
  line-height: 30px;
  padding-bottom: 18px;

  @media (max-width: 590px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const WorkItemNumber = styled.span`
  text-align: center;
  font-size: 28px;
  font-weight: 600;
  line-height: 32px;
  padding-right: 32px;
  color: #000;

  @media (max-width: 590px) {
    font-size: 24px;
  }
`;
