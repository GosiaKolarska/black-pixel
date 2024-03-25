import styled from "styled-components";

export const LinkedinSection = styled.section`
  padding: 200px 0 208px;
  background: white;
  display: flex;
  align-items: center;
  flex-direction: column;

  .abs-rect {
    position: absolute;
    bottom: 16px;
    left: 35px;
  }

  @media (max-width: 1100px) {
    padding: 200px 20px 208px;
  }

  @media (max-width: 990px) {
    padding: 120px 0;

    .abs-rect {
      bottom: -5px;
      left: 110px;
    }
  }

  @media (max-width: 790px) {
    .abs-rect {
      left: 26px;
    }
  }

  @media (max-width: 590px) {
    padding: 54px 0 108px;

    .abs-rect {
      bottom: 3px;
      left: 193px;
    }
  }
`;

export const LinkedinWrapper = styled.div`
  display: flex;
  gap: 60px;
  width: 100%;

  @media (max-width: 990px) {
    flex-direction: column;
    gap: 75px;
  }
`;

export const LinkedinLeft = styled.div`
  color: black;
  max-width: 404px;
  width: 100%;

  @media (max-width: 990px) {
    padding: 0 32px;
    max-width: 100%;
  }
`;

export const LinkedinTitle = styled.h2`
  color: #0c0e15;
  font-size: 56px;
  font-weight: 600;
  line-height: 64px;
  padding-bottom: 40px;

  span {
    display: block;

    &.blue {
      color: #213ed7;
    }
  }

  @media (max-width: 590px) {
    font-size: 32px;
    line-height: 40px;
    padding-bottom: 46px;
  }
`;

export const LinkedinContentWrapper = styled.div`
  padding-bottom: 16px;
`;

export const LinkedinContent = styled.p`
  color: #0c0e15;
  font-size: 22px;
  font-weight: 400;
  padding-bottom: 28px;
  line-height: 29px;

  @media (max-width: 590px) {
    font-size: 18px;
    line-height: 24px;

    &:last-child {
      padding-bottom: 8px;
    }
  }
`;

export const LinkedinImages = styled.div`
  position: relative;

  img {
    display: inline-block;
    &.first {
      position: absolute;
      top: -63px;
      right: 24px;
    }
    &.second {
      margin-top: 83px;
    }
    &.third {
      margin-top: 50px;
      margin-left: 43px;
    }
    &.forth {
      position: absolute;
      top: 324px;
      right: 10px;
    }
  }

  @media (max-width: 990px) {
    img {
      &.first {
        top: -63px;
        right: 210px;
      }
      &.second {
        margin-top: 3px;
        margin-left: 110px;
        max-width: 424px;
      }
      &.third {
        position: absolute;
        top: 190px;
        right: 220px;
        z-index: 9;
      }
      &.forth {
        top: 30px;
        right: 10px;
      }
    }
  }

  @media (max-width: 790px) {
    img {
      &.second {
        margin-left: 32px;
      }
    }
  }

  @media (max-width: 590px) {
    overflow: hidden;
    padding-bottom: 68px;

    img {
      object-fit: cover;
      &.first {
        top: 33px;
        right: unset;
        left: 30px;
        max-width: 144px;
      }
      &.second {
        margin-top: 133px;
        margin-left: -26px;
        max-width: 424px;
      }
      &.third {
        padding: 0px;
        bottom: 10px;
        right: 27px;
        z-index: 1;
        top: unset;
      }
      &.forth {
        top: 0;
        right: -16px;
        max-width: 213px;
      }
    }
  }
`;
