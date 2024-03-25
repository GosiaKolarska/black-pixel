import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectListItem from "../ListItem/ProjectListItem";
import ProjectSidebar from "../Sidebar/ProjectSidebar";

import {
  ProjectListSection,
  TabsList,
  TabsItem,
  TabsItemCounter,
  ProjectList,
  TabItemButton,
} from "./ProjectsList.styles";

import projectsData from "./../../../data/projects.json";

const ProjectsList = ({ onProjectSelect }) => {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [filterChangeCounter, setFilterChangeCounter] = useState(0);

  useEffect(() => {
    const handlePopState = () => {
      const searchParams = new URLSearchParams(window.location.search);
      const filterFromURL = searchParams.get("filter") || "All";
      setFilter(filterFromURL);

      if (!window.location.hash) {
        setIsSidebarOpen(false);
        setSelectedProject(null);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [filter]);

  useEffect(() => {
    const applyFilterFromURL = () => {
      const searchParams = new URLSearchParams(window.location.search);
      const filterFromURL = searchParams.get("filter") || "All";

      if (
        Object.keys(projectCounts).includes(filterFromURL) ||
        filterFromURL === "All"
      ) {
        setFilter(filterFromURL);
      }
    };

    applyFilterFromURL();
  }, []);

  useEffect(() => {
    const openProjectFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        const projectTitleFromHash = decodeURIComponent(hash).replace(
          /-/g,
          " "
        );
        const project = []
          .concat(...Object.values(projectsData.projects))
          .find(
            (p) => p.title.toLowerCase() === projectTitleFromHash.toLowerCase()
          );
        if (project) {
          setSelectedProject(project);
          setIsSidebarOpen(true);
        }
      }
    };

    openProjectFromHash();
    window.addEventListener("hashchange", openProjectFromHash);

    return () => {
      window.removeEventListener("hashchange", openProjectFromHash);
    };
  }, []);

  const updateURLForFilter = (newFilter) => {
    const currentUrl = new URL(window.location);
    const searchParams = new URLSearchParams(currentUrl.search);

    if (newFilter === "All") {
      const newUrl = currentUrl.pathname;
      window.history.pushState({ path: newUrl }, "", newUrl);
    } else {
      searchParams.set("filter", newFilter);
      const newUrl = `${currentUrl.pathname}?${searchParams.toString()}`;
      window.history.pushState({ path: newUrl }, "", newUrl);
    }
  };

  const handleFilterChange = (type) => {
    setFilter(type);
    updateURLForFilter(type);
    setFilterChangeCounter((prevCounter) => prevCounter + 1);
  };

  const projectCounts = Object.keys(projectsData.projects).reduce(
    (acc, type) => {
      acc[type] = projectsData.projects[type].length;
      return acc;
    },
    {}
  );

  const totalCount = Object.values(projectCounts).reduce(
    (sum, count) => sum + count,
    0
  );

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
    setIsSidebarOpen(true);
    window.location.hash = project.title.replace(/\s+/g, "-").toLowerCase();
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
    setSelectedProject(null);

    if (window.location.hash) {
      window.history.pushState(
        "",
        document.title,
        window.location.pathname + window.location.search
      );
    }
  };

  const handleOverlayClick = () => {
    setIsSidebarOpen(false);
    setSelectedProject(null);

    if (window.location.hash) {
      window.history.pushState(
        "",
        document.title,
        window.location.pathname + window.location.search
      );
    }
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
          <TabsItem className={filter === "All" ? "active" : ""}>
            <TabItemButton
              onClick={() => handleFilterChange("All")}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleFilterChange("All");
                }
              }}
              tabIndex="0"
            >
              All
            </TabItemButton>
          </TabsItem>
          {Object.keys(projectsData.projects).map((type) => (
            <TabsItem key={type} className={filter === type ? "active" : ""}>
              <TabItemButton
                onClick={() => handleFilterChange(type)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleFilterChange(type);
                  }
                }}
                tabIndex="0"
              >
                {type}
                <TabsItemCounter>{projectCounts[type]}</TabsItemCounter>
              </TabItemButton>
            </TabsItem>
          ))}
        </TabsList>
        <ProjectList>
          <AnimatePresence>
            {filteredAndSortedProjects.map((project, index) => (
              <motion.div
                layout
                key={`${project.title}-${project.year}-${index}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <ProjectListItem
                  project={project}
                  onSelect={handleProjectSelect}
                />
              </motion.div>
            ))}
          </AnimatePresence>
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
