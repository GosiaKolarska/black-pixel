import styled from "styled-components";

export const ProjectItem = styled.div`
  list-style: none;
  margin-bottom: 20px;
  padding: 20px;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 280px;
  width: 510px;
  color: white;
  background-image: url(${(props) => props.backgroundImage});
  transition: transform 0.3s ease;
  position: relative;
  transition: opacity 0.5s ease, transform 0.5s ease;
  cursor: pointer;

  &:before {
    content: "";
    display: block;
    border-radius: 20px;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background: linear-gradient(
      rgba(0, 0, 0, 0.1) 15%,
      rgba(0, 0, 0, 0.85) 90%
    );
  }

  &:hover {
    transform: scale(1.05);
  }

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  &.hidden {
    opacity: 0;
    transform: translateY(20px);
  }

  @media (max-width: 1100px) {
    width: 48%;
  }

  @media (max-width: 790px) {
    width: 100%;
  }

  @media (max-width: 590px) {
    height: 220px;
  }
`;

export const ProjectItemTitle = styled.h3`
  margin: 0;
  color: #fff;
  z-index: 2;

  @media (max-width: 590px) {
    font-size: 1rem;
  }
`;
export const ProjectItemDescriptionShort = styled.p`
  margin: 0;
  color: #d5d5d5;
  padding-bottom: 16px;
  z-index: 2;

  @media (max-width: 590px) {
    font-size: 13px;
    padding-bottom: 0;
  }
`;

export const TechnologyList = styled.ul`
  list-style: none;
  padding: 0;
  z-index: 2;

  @media (max-width: 590px) {
    display: none;
  }
`;

export const TechnologyListItem = styled.li`
  display: inline-block;
  background: #696869;
  padding: 4px 10px;
  border-radius: 50px;
  text-transform: capitalize;
  font-size: 12px;
  margin-right: 6px;
  color: rgb(255, 255, 255);
  font-weight: 500;
`;
