import React, { useState } from "react";

import {
  ProjectItem,
  ProjectItemDescriptionShort,
  ProjectItemContent,
  TechnologyList,
  TechnologyListItem,
  ProjectItemImageWrapper,
  StyledImage,
} from "./Project.ListItem.styles";
import { motion } from "framer-motion";
import Image from "next/image";

const ProjectListItem = ({ project, onSelect }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <ProjectItem
      style={{ backgroundColor: `${project.color}` }}
      onClick={() => onSelect(project)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
          <Image
            src={project.logo}
            width="360"
            height="100"
            alt={`logo ${project.title}`}
          />
        </StyledImage>
      </ProjectItemImageWrapper>
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: isHovered ? 0 : "100%", opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        as={ProjectItemContent}
      >
        <ProjectItemDescriptionShort textColor={project.textColor}>
          {project.descriptionShort}
        </ProjectItemDescriptionShort>
        <TechnologyList>
          {project.technologies.map((tech, techIndex) => (
            <TechnologyListItem textColor={project.textColor} key={techIndex}>
              {tech}
            </TechnologyListItem>
          ))}
        </TechnologyList>
      </motion.div>
    </ProjectItem>
  );
};

export default ProjectListItem;
