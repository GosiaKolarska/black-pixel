import React from "react";
import {
  ProjectItem,
  ProjectItemTitle,
  ProjectItemDescriptionShort,
  TechnologyList,
  TechnologyListItem,
} from "./Project.ListItem.styles";

const ProjectListItem = ({ project, onSelect }) => {
  const handleClick = () => {
    console.log("Project Selected: ", project);
    onSelect(project);
  };

  return (
    <ProjectItem
      style={{ backgroundImage: `url(${project.img})` }}
      onClick={() => onSelect(project)}
    >
      <ProjectItemTitle>{project.title}</ProjectItemTitle>
      <ProjectItemDescriptionShort>
        {project.descriptionShort}
      </ProjectItemDescriptionShort>
      <TechnologyList>
        {project.technologies.map((tech, techIndex) => (
          <TechnologyListItem key={techIndex}>{tech}</TechnologyListItem>
        ))}
      </TechnologyList>
    </ProjectItem>
  );
};

export default ProjectListItem;
