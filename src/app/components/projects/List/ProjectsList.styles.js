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
  gap: 6px;

  @media (max-width: 790px) {
    justify-content: flex-start;
    white-space: nowrap;
    overflow-x: auto;
    margin: 0px auto;
    padding-bottom: 1rem;
  }
`;

export const TabsItemCounter = styled.span`
  background: #ebebeb;
  padding-top: 0.125rem;
  padding-bottom: 0.05rem;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  border-radius: 0.25rem;
  margin-left: 0.75rem;
  font-size: 0.85rem;
  line-height: 1.25;
`;

export const TabsItem = styled.li`
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &.active {
    background-color: #213ed7;
    color: white;
    font-weight: bold;

    ${TabsItemCounter} {
      background: #fff;
      color: #000;
    }
  }

  &:hover {
    background-color: #cfd2de;
    color: #000;

    ${TabsItemCounter} {
      background: #fff;
      color: #000;
    }
  }
`;

export const ProjectList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding-top: 40px;

  @media (max-width: 1100px) {
    justify-content: space-between;
  }
`;
