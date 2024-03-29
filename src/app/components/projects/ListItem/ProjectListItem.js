import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ProjectItem,
  ProjectItemDescriptionShort,
  TechnologyList,
  TechnologyListItem,
  ProjectItemImageWrapper,
  StyledImage,
  ProjectItemReadMoreWrapper,
} from "./Project.ListItem.styles";

const ProjectListItem = ({ project, onSelect }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [lastFocused, setLastFocused] = useState(null);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handleKeyPress = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onSelect(project);
    }
  };

  const handleProjectSelect = (project, projectRef) => {
    setSelectedProject(project);
    setIsSidebarOpen(true);
    setLastFocused(projectRef);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
    if (lastFocused) {
      lastFocused.focus();
    }
  };

  const arrowVariants = {
    hover: {
      opacity: 1,
      x: [0, 10],
      transition: {
        x: {
          yoyo: Infinity,
          duration: 0.3,
          ease: "easeIn",
        },
        opacity: {
          duration: 0.2,
          ease: "easeInOut",
        },
      },
    },
    initial: {
      opacity: 0,
      x: 0,
    },
  };

  return (
    <ProjectItem
      role="button"
      tabIndex="0"
      style={{ backgroundColor: `${project.color}` }}
      onClick={() => onSelect(project)}
      onKeyDown={handleKeyPress}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-pressed="false"
    >
      <ProjectItemImageWrapper>
        <StyledImage
          initial={{ left: "50%", x: "-50%" }}
          animate={{
            left: isHovered ? "0%" : "50%",
            x: isHovered ? "0%" : "-50%",
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <img src={project.logo} alt={`logo ${project.title}`} />
        </StyledImage>
      </ProjectItemImageWrapper>
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: isHovered ? 0 : "100%", opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <ProjectItemDescriptionShort
          style={{ color: project.textColor || "#FFF" }}
        >
          {project.descriptionShort}
        </ProjectItemDescriptionShort>
        <TechnologyList>
          {project.technologies.map((tech, techIndex) => (
            <TechnologyListItem
              key={techIndex}
              style={{ color: project.textColor || "#FFF" }}
            >
              {tech}
            </TechnologyListItem>
          ))}
        </TechnologyList>
      </motion.div>
      <ProjectItemReadMoreWrapper>
        <motion.div
          variants={arrowVariants}
          animate={isHovered ? "hover" : "initial"}
        >
          <svg
            width="15"
            height="28"
            viewBox="0 0 15 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill={project.textColor || "#FFF"}
              d="M3.0625 0.9375L14.5 12.9375C14.7917 13.2292 14.9375 13.5625 14.9375 13.9375C14.9375 14.3125 14.7917 14.6667 14.5 15L3.0625 26.9375C2.39583 27.5208 1.6875 27.5417 0.9375 27C0.354167 26.2917 0.354167 25.5833 0.9375 24.875L11.4375 13.875L0.9375 3.0625C0.354167 2.3125 0.354167 1.60417 0.9375 0.9375C1.6875 0.354167 2.39583 0.354167 3.0625 0.9375Z"
            />
          </svg>
        </motion.div>
      </ProjectItemReadMoreWrapper>
    </ProjectItem>
  );
};

export default ProjectListItem;
