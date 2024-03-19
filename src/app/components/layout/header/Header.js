import React, { useState, useEffect } from "react";
import Link from "next/link";
import debounce from "lodash/debounce";
import { useRouter } from "next/router";
import StyledLink from "../../common/link/StyledLink";
import {
  StyledHeader,
  Container,
  Logo,
  Nav,
  NavList,
  NavItem,
} from "./Header.styles";
import globalData from "../../../data/global.json";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isScrolledPast200px, setIsScrolledPast200px] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { header } = globalData;
  const router = useRouter();

  const handleScroll = debounce(() => {
    const currentScrollY = window.pageYOffset;
    setIsAtTop(currentScrollY < 140);
    setIsScrolledPast200px(currentScrollY > 200);

    if (currentScrollY > 140 && currentScrollY > lastScrollY) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    setLastScrollY(currentScrollY);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const skipToContent = () => {
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.focus();
    }
  };

  return (
    <StyledHeader
      $isScrolled={isScrolled}
      className={`${isScrolledPast200px ? "background-black" : ""} ${
        isAtTop ? "top0" : ""
      }`}
    >
      <Container className="container">
        <a href="#main-content" onClick={skipToContent} className="skip-link">
          Skip to content
        </a>
        <Link href="/" passHref>
          <Logo aria-label="black pixel logo">
            <span className="logo-first">black </span>
            <span className="logo-second">pixel</span>
          </Logo>
        </Link>
        <Nav aria-label="Main navigation">
          <NavList>
            {header.map((link) => {
              const isActiveLink = router.pathname === link.href;

              return (
                <NavItem key={link.text}>
                  <StyledLink
                    href={link.href}
                    type={link.type}
                    isActive={isActiveLink}
                    aria-label={link.text}
                  >
                    {link.text}
                  </StyledLink>
                </NavItem>
              );
            })}
          </NavList>
        </Nav>
      </Container>
    </StyledHeader>
  );
}

export default Header;
