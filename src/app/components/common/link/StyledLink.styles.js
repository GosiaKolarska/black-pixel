import styled, { css } from "styled-components";

export const LinkBase = styled.span`
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s;
  margin: 12px 0;
  display: inline-block;
`;

const commonSVGStyles = css`
  width: 20px;
  height: 18px;
  display: inline-block;
  margin-left: 12px;
  path {
    fill: ${({ color }) => (color === "light" ? "#fff" : "#0C0E15")};
  }
`;

export const SVGIcon = styled.svg`
  ${commonSVGStyles}
`;

export const LinkSimple = styled(LinkBase)`
  color: #f1f6fd;
  font-size: 18px;
  font-weight: 600;
  padding: 0 16px;

  position: relative;

  &:after {
    display: block;
    content: "";
    border-bottom: solid 1px #fff;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
    transform-origin: 100% 50%;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: 0 50%;
  }

  &.active:after {
    transform: scaleX(1);
  }
`;

export const LinkUnderlineArrow = styled(LinkBase)`
  color: #0c0e15;
  font-size: 22px;
  font-weight: 600;
  border-bottom: 2px solid #0c0e15;
  padding-bottom: 8px;
  transition: all 0.2s;

  ${({ color }) =>
    color === "light" &&
    css`
      color: #fff;
      border-bottom-color: #fff;
      ${SVGIcon} {
        path {
          fill: #fff;
        }
      }
    `}

  &:hover {
    color: #213ed7;
    border-bottom: 2px solid #213ed7;

    ${SVGIcon} {
      path {
        fill: #213ed7;
        transition: fill 0.2s ease-out;
      }
    }
  }

  @media (max-width: 590px) {
    font-size: 18px;
  }
`;

export const LinkBackground = styled(LinkBase)`
  padding: 14px 20px 14px 30px;
  border-radius: 30px;
  color: #000;
  font-size: 18px;
  font-weight: 600;
  line-height: 18px;
  margin-right: 16px;
  border: 1px solid #fff;
  display: flex;

  background: linear-gradient(to right, #0c0e15 50%, white 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.3s ease-out;
  position: relative;

  ${SVGIcon} {
    margin-left: 20px;
    transition: fill 0.3s ease-out;
  }

  &:hover {
    border-radius: 30px;
    border: 1px solid #fff;
    color: #fff;
    background-position: left bottom;

    ${SVGIcon} {
      path {
        fill: #fff;
        transition: fill 0.3s ease-out;
      }
    }
  }
`;


export const LinkExtrenal = styled.a`
  color: #0c0e15;
  font-size: 22px;
  font-weight: 600;
  border-bottom: 2px solid #0c0e15;
  padding-bottom: 8px;
  transition: all 0.2s;

  ${({ color }) =>
    color === "light" &&
    css`
      color: #fff;
      border-bottom-color: #fff;
      ${SVGIcon} {
        path {
          fill: #fff;
        }
      }
    `}

  &:hover {
    color: #213ed7;
    border-bottom: 2px solid #213ed7;

    ${SVGIcon} {
      path {
        fill: #213ed7;
        transition: fill 0.2s ease-out;
      }
    }
  }

  @media (max-width: 590px) {
    font-size: 18px;
  }
`;

