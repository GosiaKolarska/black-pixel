import styled from "styled-components";

export const ProjectListSection = styled.section`
  padding: 60px 0 180px;
  background-color: #fff;

  @media (max-width: 1100px) {
    padding: 60px 20px 180px;
  }

  @media (max-width: 590px) {
    padding: 40px 32px 120px;
  }
`;

export const TabsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  margin-bottom: 40px;

  @media (max-width: 790px) {
    justify-content: flex-start;
    white-space: nowrap;
    overflow-x: auto;
    margin: 0px auto;
    padding-bottom: 1rem;
  }
`;

export const TabsItem = styled.li`
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &.active {
    background-color: #213ed7;
    color: white;
    font-weight: bold;
  }

  &:hover {
    background-color: #cfd2de;
    color: #000;
  }
`;

export const ProjectList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding-top: 40px;

  @media (max-width: 1100px) {
    justify-content: space-between;
  }
`;
