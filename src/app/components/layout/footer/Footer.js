import React from "react";
import { FooterContainer, FooterText } from "./Footer.styles";
import globalData from "../../../data/global.json";

const Footer = () => {
  const { copy } = globalData.footer;
  return (
    <FooterContainer>
      <FooterText>{copy}</FooterText>
    </FooterContainer>
  );
};

export default Footer;
