import styled from "styled-components";
import { motion } from "framer-motion";

export const ProjectItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  list-style: none;
  padding: 20px;
  border-radius: 32px;
  height: 280px;
  width: 500px;
  color: white;
  background-image: url(${(props) => props.backgroundImage});
  position: relative;
  transition: opacity 0.5s ease, transform 0.5s ease;
  cursor: pointer;
  overflow: hidden;

  &:focus {
    outline: 4px solid #0004ff;
    outline-offset: 3px;
  }

  @media (max-width: 1100px) {
    width: 100%;
  }

  @media (max-width: 1024px) {
    justify-content: center;
  }

  @media (max-width: 590px) {
    height: 220px;
  }
`;

export const ProjectItemImageWrapper = styled.div`
  position: relative;
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    object-fit: contain;
    width: auto;
    height: 100px;
    max-width: 360px;

    @media (max-width: 590px) {
      max-width: 280px;
    }
  }
`;

export const StyledImage = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 100px;
  width: auto;

  @media (max-width: 1024px) {
    position: static;
    transform: unset !important;
  }
`;

export const ProjectItemDescriptionShort = styled.p`
  margin: 0;
  color: #fff;
  padding-bottom: 16px;
  z-index: 2;
  padding-right: 10px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const TechnologyList = styled.ul`
  list-style: none;
  padding: 0;
  z-index: 2;

  @media (max-width: 1024px) {
    display: none;
  }

  @media (max-width: 590px) {
    display: none;
  }
`;

export const TechnologyListItem = styled.li`
  display: inline-block;
  background: rgb(0 0 0 / 15%);
  padding: 4px 10px;
  border-radius: 50px;
  text-transform: capitalize;
  font-size: 12px;
  margin-right: 6px;
  color: rgb(255, 255, 255);
  font-weight: 500;
`;

export const ProjectItemReadMoreWrapper = styled.div`
  position: absolute;
  right: 30px;
  top: calc(50% - 14px);

  @media (max-width: 1024px) {
    display: none;
  }
`;