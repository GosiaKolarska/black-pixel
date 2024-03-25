import styled from "styled-components";

export const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 10;
  background-color: transparent;
  padding: 19px 0;
  top: ${(props) => (props.$isScrolled ? "-100px" : "0")};
  transition: 0.3s;

  &.top0 {
    padding: 49px 0 19px;
  }

  &.background-black {
    background-color: #0c0e15;
  }

  .skip-link {
    position: absolute;
    top: -40px;
    left: 0;
    background: #000;
    color: white;
    padding: 8px;
    z-index: 100;
  }

  .skip-link:focus {
    top: 0;
  }

  @media (max-width: 1100px) {
    padding: 23px 20px !important;
  }

  @media (max-width: 990px) {
    padding: 23px 37px 23px 32px;

    &.top0 {
      padding: 23px 37px 23px 32px;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Logo = styled.div`
  .logo-first {
    color: #fff;
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;
  }
  .logo-second {
    color: #fff;
    font-size: 24px;
    line-height: 32px;
    font-weight: 400;
  }

  @media (max-width: 590px) {
    .logo-first {
      font-size: 16px;
    }

    .logo-second {
      font-size: 16px;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
`;

export const NavItem = styled.li`
  &:last-child {
    padding-right: 0;
  }
  a {
    color: #fff;
    text-decoration: none;
    margin: 0 9px;
    span {
      margin: 0;
    }
  }

  &:last-child {
    a {
      margin-right: 0;
      span {
        padding-right: 0;
      }
    }
  }

  @media (max-width: 590px) {
    a {
      margin: 0;
      span {
        font-size: 14px;
      }
    }
  }
`;
