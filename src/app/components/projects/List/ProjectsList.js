import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectListItem from "../ListItem/ProjectListItem";
import ProjectSidebar from "../Sidebar/ProjectSidebar";

import {
  ProjectListSection,
  TabsList,
  TabsItem,
  ProjectList,
} from "./ProjectsList.styles";

import projectsData from "./../../../data/projects.json";

const ProjectsList = ({ onProjectSelect }) => {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
    setIsSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleOverlayClick = () => {
    setIsSidebarOpen(false);
  };

  const getFilteredProjects = () => {
    let projects =
      filter === "All"
        ? [].concat(...Object.values(projectsData.projects))
        : projectsData.projects[filter] || [];
    projects.sort((a, b) =>
      a.priority === b.priority ? b.year - a.year : a.priority - b.priority
    );
    return projects;
  };

  const filteredAndSortedProjects = getFilteredProjects();

  return (
    <ProjectListSection>
      <div className="container-lg">
        <TabsList>
          <TabsItem
            className={filter === "All" ? "active" : ""}
            onClick={() => setFilter("All")}
          >
            All
          </TabsItem>
          {Object.keys(projectsData.projects).map((type) => (
            <TabsItem
              key={type}
              className={filter === type ? "active" : ""}
              onClick={() => setFilter(type)}
            >
              {type}
            </TabsItem>
          ))}
        </TabsList>
        <ProjectList>
          {filteredAndSortedProjects.map((project, index) => (
            <ProjectListItem
              key={index}
              project={project}
              onSelect={handleProjectSelect}
            />
          ))}
        </ProjectList>
        <AnimatePresence>
          {isSidebarOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="overlay"
                onClick={handleOverlayClick}
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100vw",
                  height: "100vh",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  zIndex: 10,
                }}
              />

              <ProjectSidebar
                project={selectedProject}
                onClose={handleCloseSidebar}
                isOpen={isSidebarOpen}
                handleOverlayClick={handleOverlayClick}
              />
            </>
          )}
        </AnimatePresence>
      </div>
    </ProjectListSection>
  );
};

export default ProjectsList;
