import React, { useEffect } from "react";
import StyledLink from "../../common/link/StyledLink";
import {
  Sidebar,
  SidebarWrapper,
  ButtonWrapper,
  ButtonClose,
  SidebarTitle,
  SidebarParagraph,
  SidebarParagraphShort,
  TechnologiesList,
  TechnologyItem,
  SidebarImage,
  SidebarParagraphWrapper,
  SidebarParagraphTitle,
  WebsiteGithubURL,
  ProjectSidebarOverlay,
} from "./ProjectSidebar.styles";

const ProjectSidebar = ({ project, onClose, isOpen, handleOverlayClick }) => {
  if (!project) return null;
  const sidebarClass = isOpen ? "sidebarOpen" : "sidebarClose";

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => document.body.classList.remove("no-scroll");
  }, [isOpen]);

  return (
    <Sidebar
      className={sidebarClass}
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <SidebarWrapper>
        <ButtonWrapper>
          <ButtonClose onClick={onClose}>Back to projects</ButtonClose>
        </ButtonWrapper>
        <SidebarTitle>{project.title}</SidebarTitle>
        <SidebarParagraphShort>
          {project.descriptionShort}
        </SidebarParagraphShort>
        <SidebarImage src={project.img} />
        <SidebarParagraphWrapper>
          <SidebarParagraphTitle>About</SidebarParagraphTitle>
          {project.descriptionLong.map((paragraph, index) => (
            <SidebarParagraph key={index}>{paragraph}</SidebarParagraph>
          ))}
        </SidebarParagraphWrapper>
        <TechnologiesList>
          <SidebarParagraphTitle>Technologies</SidebarParagraphTitle>
          {project.technologies.map((tech, index) => (
            <TechnologyItem key={index}>{tech}</TechnologyItem>
          ))}
        </TechnologiesList>
        {project.linkWebsite === "soon" || project.linkGithub === "soon" ? (
          <WebsiteGithubURL>
            <SidebarParagraphTitle>Website & Github</SidebarParagraphTitle>
            <p>Details will be available soon. Stay tuned!</p>
          </WebsiteGithubURL>
        ) : project.linkWebsite || project.linkGithub ? (
          <WebsiteGithubURL>
            {project.linkWebsite && project.linkWebsite !== "confidential" && (
              <div>
                <SidebarParagraphTitle>Website</SidebarParagraphTitle>
                <StyledLink href={project.linkWebsite} type="underline-arrow">
                  Visit {project.title} website
                </StyledLink>
              </div>
            )}
            {project.linkGithub && project.linkGithub !== "confidential" && (
              <div>
                <SidebarParagraphTitle>Github</SidebarParagraphTitle>
                View on{" "}
                <StyledLink href={project.linkGithub}>Github</StyledLink>
              </div>
            )}
          </WebsiteGithubURL>
        ) : (
          <WebsiteGithubURL>
            <SidebarParagraphTitle>Website & Github</SidebarParagraphTitle>
            <p>
              Due to confidentiality agreements, specific project details and
              links related to the website and codebase are not publicly
              shareable.
            </p>
          </WebsiteGithubURL>
        )}
      </SidebarWrapper>
    </Sidebar>
  );
};

export default ProjectSidebar;
