"use client";

import React, { useEffect, useRef } from "react";
import StyledLink from "../../common/link/StyledLink";
import aboutContent from "../../../data/about.json";
import {
  LinkedinSection,
  LinkedinWrapper,
  LinkedinLeft,
  LinkedinTitle,
  LinkedinContent,
  LinkedinImages,
  LinkedinContentWrapper,
} from "./AboutLinkedin.styles";
import Image from "next/image";

const AboutLinkedin = () => {
  const linkedinData = aboutContent.aboutlinkedin;
  const parallaxContainer = useRef(null);

  useEffect(() => {
    const parallax = (event) => {
      if (parallaxContainer.current) {
        const elements =
          parallaxContainer.current.querySelectorAll(".parallax-element");
        elements.forEach((element) => {
          const position = parseFloat(element.getAttribute("data-value"));
          const x = ((event.clientX - window.innerWidth / 2) * position) / 300;
          const y = ((event.clientY - window.innerHeight / 2) * position) / 200;

          const translateX = Math.max(Math.min(x, 18), -76);
          const translateY = Math.max(Math.min(y, 12), -42);

          element.style.transform = `translate(${translateX}px, ${translateY}px)`;
        });
      }
    };

    document.addEventListener("mousemove", parallax);

    return () => {
      document.removeEventListener("mousemove", parallax);
    };
  }, []);

  return (
    <LinkedinSection>
      <LinkedinWrapper className="container">
        <LinkedinLeft>
          <LinkedinTitle>
            <span>{linkedinData.titleFirstRow}</span>
            <span className="blue">{linkedinData.titleMiddleRowBlue}</span>
            <span>{linkedinData.titleLastRow}</span>
          </LinkedinTitle>
          <LinkedinContentWrapper>
            {linkedinData.description.map((paragraph, index) => (
              <LinkedinContent key={index}>{paragraph}</LinkedinContent>
            ))}
          </LinkedinContentWrapper>
          <StyledLink
            target="_blank"
            href={linkedinData.linkedinLink}
            type="underline-arrow"
          >
            {linkedinData.linkedinText}
          </StyledLink>
        </LinkedinLeft>
        <LinkedinImages className="parallax-wrap" ref={parallaxContainer}>
          {linkedinData.linkedinPhotos.map((photo, index) => (
            <Image
              src={`/assets/about-photos/${photo.imageSrc}`}
              alt={photo.imageAlt}
              key={index}
              data-value={photo.value}
              className={`parallax-element ${photo.className}`}
              width={photo.width}
              height={photo.height}
            />
          ))}
          <svg
            width="15"
            height="25"
            viewBox="0 0 15 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="abs-rect"
          >
            <path d="M0 10L15 0V25H0V10Z" fill="#213ED7" />
          </svg>
        </LinkedinImages>
      </LinkedinWrapper>
    </LinkedinSection>
  );
};

export default AboutLinkedin;
