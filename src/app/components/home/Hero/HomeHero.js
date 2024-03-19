import React from "react";
import StyledLink from "../../common/link/StyledLink";
import homeData from "../../../data/home.json";
import {
  HeroSection,
  VideoContainer,
  Container,
  Title,
  WhiteLine,
  HeroContent,
  LinksWrapper,
  CompaniesWrapper,
  HeroSectionContentWrapper,
  CompaniesTitle,
  CompaniesList,
  CompanyItem,
} from "./HomeHero.styles";
import Image from "next/image";

const HomeHero = () => {
  const { title, description, links, trusted, companies, heroVideo } =
    homeData.hero;

  return (
    <HeroSection id="main-content" className="scrollHero">
      <VideoContainer onClick={(e) => e.preventDefault()}>
        <video
          autoPlay
          loop
          muted
          playsInline
          aria-label="Background video"
          role="img"
          poster={`/assets/${homeData.hero.heroVideoPoster}`}
        >
          <source src={`/assets/${heroVideo}`} type="video/mp4" />
        </video>
      </VideoContainer>
      <Container className="container">
        <HeroSectionContentWrapper>
          <Title>{title}</Title>
          <WhiteLine />
          <HeroContent>{description}</HeroContent>
          <LinksWrapper>
            {links.map((link) => {
              const isAnchorLink = link.href.startsWith("#");
              const targetId = isAnchorLink ? link.href.slice(1) : null;
              return (
                <StyledLink
                  key={link.text}
                  href={link.href}
                  type={link.type}
                  onClick={
                    isAnchorLink
                      ? (e) => handleSmoothScroll(e, targetId)
                      : undefined
                  }
                >
                  {link.text}
                </StyledLink>
              );
            })}
          </LinksWrapper>
        </HeroSectionContentWrapper>
        <CompaniesWrapper>
          <CompaniesTitle>{trusted}</CompaniesTitle>
          <CompaniesList>
            {companies.map((company) => (
              <CompanyItem key={company.logo}>
                <Image
                  src={`/assets/companies-logo/${company.logo}`}
                  alt={`Logo of ${company.logo.split(".")[0]}`}
                  width={company.width}
                  height={company.height}
                />
              </CompanyItem>
            ))}
          </CompaniesList>
        </CompaniesWrapper>
      </Container>
    </HeroSection>
  );
};

export default HomeHero;
