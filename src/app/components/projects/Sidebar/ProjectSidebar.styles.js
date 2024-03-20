import styled from "styled-components";
import { motion } from "framer-motion";

export const Sidebar = styled(motion.aside)`
  position: fixed;
  top: 0;
  right: 0;
  width: 540px;
  height: 100%;
  z-index: 999999;
  padding: 2rem;
  background-color: white;
  box-shadow: -2px 0px 5px rgba(0, 0, 0, 0.5);
  overflow: auto;

  @media (max-width: 590px) {
    width: 100%;
    overflow: auto;
  }
`;

export const SidebarWrapper = styled.div``;

export const ButtonWrapper = styled.div`
  margin-bottom: 2rem;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid #eaeaea;
`;

export const ButtonClose = styled.button`
  font-weight: bold;
  font-size: 14px;
  padding: 0;
  margin: 0 auto;
  display; inline-block;

  &:before {
      margin-right: 8px;
      border-style: solid;
      border-width: 0.20em 0.20em 0 0;
      content: '';
      display: inline-block;
      height: 0.4em;
      left: 0;
      transform: rotate(-135deg);
      position: relative;
      top: 4px;
      vertical-align: top;
      width: 0.4em;
  }
`;

export const ProjectSidebarOverlay = styled.div`
  z-index: 9999;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  right: 0px;
  background: rgba(0, 0, 0, 0.8);
`;

export const SidebarImage = styled.img`
  max-width: 480px;
  border-radius: 1rem;
  border: 1px solid;

  @media (max-width: 590px) {
    object-fit: contain;
    max-width: 100%;
  }
`;

export const SidebarTitle = styled.h2`
  margin: 1.5rem 0 0.5rem;
`;

export const SidebarParagraphWrapper = styled.div``;

export const SidebarParagraph = styled.p`
  margin-bottom: 1rem;
`;

export const SidebarParagraphShort = styled.p`
  margin-bottom: 1.5rem;
`;

export const SidebarParagraphTitle = styled.h3`
  margin-top: 2rem;
  margin-bottom: 0.8rem;
`;

export const TechnologiesList = styled.div``;

export const TechnologyItem = styled.span`
  display: inline-block;
  margin-right: 10px;
  background: #efe9e4;
  padding: 6px 13px;
  border-radius: 4px;
  text-transform: capitalize;
  font-size: 11px;
  margin-right: 6px;
  margin-bottom: 6px;
  color: #000;
  font-weight: 700;
`;

export const WebsiteGithubURL = styled.div``;
