import React from "react";

import {
  ProjectsSectionHero,
  ProjectsSectionHeroWrapper,
  ProjectsSectionHeroTitle,
  ProjectsSectionHeroSubTitle,
  ProjectSectionHeroVideo,
} from "./ProjectsHero.styles";

const ProjectsHero = () => {
  return (
    <ProjectsSectionHero>
      <ProjectSectionHeroVideo onClick={(e) => e.preventDefault()}>
        <video
          autoPlay
          loop
          muted
          playsInline
          aria-label="Background video"
          role="img"
          poster={"/assets/projects-hero-poster.png"}
        >
          <source src="/assets/projects-hero-video.mp4" type="video/mp4" />
        </video>
      </ProjectSectionHeroVideo>
      <div className="container">
        <ProjectsSectionHeroWrapper>
          <ProjectsSectionHeroTitle>
            Crafting the Future
          </ProjectsSectionHeroTitle>
          <ProjectsSectionHeroSubTitle>
            Explore the projects where creativity meets technology, driving
            change and shaping tomorrow.
          </ProjectsSectionHeroSubTitle>
        </ProjectsSectionHeroWrapper>
      </div>
    </ProjectsSectionHero>
  );
};

export default ProjectsHero;
