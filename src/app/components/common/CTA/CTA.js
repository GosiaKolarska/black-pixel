import React from "react";
import globalData from "../../../data/global.json";
import Script from "next/script";
import {
  SectionCTA,
  Container,
  CtaTitle,
  CTALink,
  CTALinkWrapper,
} from "./CTA.styles";

const CTA = () => {
  const { title, link } = globalData.cta;

  return (
    <>
      <SectionCTA as="section" aria-labelledby="cta-title">
        <Container className="container">
          <CtaTitle id="cta-title">{title}</CtaTitle>
          <CTALinkWrapper>
            <CTALink
              data-tf-live="01HS9CMXSAXR74EFNJRN553P37"
              data-tf-position="right"
              data-tf-opacity="100"
              data-tf-iframe-props="title=Contact Form"
              data-tf-auto-close="true"
              data-tf-transitive-search-params="true"
              data-tf-medium="snippet"
            ></CTALink>

            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.3867 1.30078L18.9492 8.51953C19.1497 8.72005 19.25 8.96354 19.25 9.25C19.25 9.53646 19.1497 9.77995 18.9492 9.98047L11.3867 17.1992C10.8711 17.6003 10.3841 17.6003 9.92578 17.1992C9.52474 16.6836 9.52474 16.1966 9.92578 15.7383L15.6406 10.2812H1.03125C0.401042 10.224 0.0572917 9.88021 0 9.25C0.0572917 8.61979 0.401042 8.27604 1.03125 8.21875H15.6406L9.92578 2.76172C9.52474 2.30339 9.52474 1.81641 9.92578 1.30078C10.3841 0.89974 10.8711 0.89974 11.3867 1.30078Z"
                fill="#fff"
              />
            </svg>
          </CTALinkWrapper>
        </Container>
      </SectionCTA>
      <Script
        src="//embed.typeform.com/next/embed.js"
        strategy="afterInteractive"
      />
    </>
  );
};

export default CTA;
